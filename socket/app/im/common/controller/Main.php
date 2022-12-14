<?php
namespace common\controller;

use \think\Db;
use \common\controller\SendData;
class Main
{
    /** 业务处理控制器主目录 */
    private static $appRootNamespace = '\home';
    /** 缓存的每个连接的实例(这样能够缓存不同连接的静态数据) */
    private static $clientClass = [];

    public static function index($client_id, $data)
    {       
        $runClass = self::$appRootNamespace . '\\' . $data['module'] . '\\controller\\' .$data['controller'];
        
        if (!class_exists($runClass)) {
            print_r('class no found: ' . $runClass);
            return;
        }
        if (!isset(self::$clientClass[$client_id])) {
            self::$clientClass[$client_id] = [];
        }
        if(!isset(self::$clientClass[$client_id][$runClass])){
            $appClass = new $runClass;
            $appClass->client_id = $client_id;
            /** 这里把每一个这个客户端链接的实列缓存起来，*/
            self::$clientClass[$client_id][$runClass] = $appClass;
        }
        self::$clientClass[$client_id][$runClass]->$appAction($req);
    }

    /**
     * 进程启动时触发（在这里初始化mysql连接）
     */
    public static function start($worker)
    {
        Db::setConfig([
            // 数据库类型
            'type'        => 'mysql',
            // 服务器地址
            'hostname'    => '127.0.0.1',
            // 数据库名
            'database'    => 'im',
            // 数据库用户名
            'username'    => 'im',
            // 数据库密码
            'password'    => 'Fhk4tCXtnDmHP5fL',
            // 数据库连接端口
            'hostport'    => '3306',
            // 数据库连接参数
            'params'      => [],
            // 数据库编码默认采用utf8
            'charset'     => 'utf8',
            // 数据库表前缀
            'prefix'      => 'txzh_',
        ]);
    }

    /**
     * 连接时触发
     * @param int $client_id 客户端连接id
     */
    public static function connect($client_id)
    {
        SendData::sendToClient($client_id,'clientLink',['client_id'=>$client_id]);
    }

    /**
     * 关闭连接时触发
     * @param int $client_id 客户端连接id
     */
    public static function close($client_id)
    {
        unset(self::$clientClass[$client_id]);
    }

    /**
     * 验证连接是否合法
     */
    public static function checkConnect($connection,$http_header)
    {
        // 在这里$_SERVER['HTTP_ORIGIN']标识来自哪个站点的页面发起的websocket链接
        if(0){
            //$connection->close();
        }
        // onWebSocketConnect 里面$_GET $_SERVER是可用的
    }

    /**
     * 进程结束时触发
     */
    public static function workerStop($worker){
        
    }
    
}

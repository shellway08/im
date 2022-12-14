<?php
/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 2020-06-06
 * Time: 16:01
 */

namespace extend\service;



class RedisService
{
    static $redis;
    static public function instance()
    {
        if (empty(self::$redis)) {
            $redis = new \Redis();
            $redis->connect('127.0.0.1', 6379);
            //$redis->auth('123456');
            self::$redis = $redis;
        }
        return self::$redis;
    }
    //
    static function lPush($key,$val){
        $redis = self::instance();
        return $redis->lPush($key,$val);
    }
    static function rPush($key,$val){
        $redis = self::instance();
        return $redis->rPush($key,$val);
    }
    static function rPop($key){
        $redis = self::instance();
        return $redis->rPop($key);
    }

    static function llen($key){
        $redis = self::instance();
        return $redis->lLen($key);
    }

    static function get($key){
        $redis = self::instance();
        return $redis->get($key);
    }

    static function del($key){
        $redis = self::instance();
        return $redis->del($key);
    }

    static function ttl($key){
        $redis = self::instance();
        return $redis->ttl($key);
    }

    static function set($key,$val,$expire = -1){
        $redis = self::instance();
        return $redis->set($key,$val);
    }

    static function setex($key,$val,$expire = -1){
        $redis = self::instance();
        return $redis->setex($key,$expire,$val);
    }

    static function setnx($key,$val,$expire = -1){
            $redis = self::instance();
            $res = $redis->setnx($key,$val);
            if($res){
                self::expire($key,$expire);
            }
            return $res;
    }

    static function expire($key,$ttl = -1){
        $redis = self::instance();
        return $redis->expire($key,$ttl);
    }

    /**
     * ζ εΊιε
     * @param $key
     * @param $val
     * @return int
     */
    static function sadd($key,$val){
        $redis = self::instance();
        return $redis->sAdd($key,$val);
    }

    static function sMembers($key){
        $redis = self::instance();
        return $redis->sMembers($key);
    }

    /**
     * ιεδΈ­ζ―ε¦ζζεη΄ 
     * @param $key
     * @param $member
     * @return bool
     */
    static function sismember($key,$member){
        $redis = self::instance();
        return $redis->sIsMember($key,$member);
    }


    /**
     * η§»ι€ιεδΈ­ηζδΈͺεη΄ 
     * @param $key
     * @param $member
     * @return bool
     */
    static function srem($key,$member){
        $redis = self::instance();
        return $redis->sRem($key,$member);
    }

    /**θΏειεδΈ­ηζζεη΄ 
     * @param $key
     * @return int
     */
    static function scard($key){
        $redis = self::instance();
        return $redis->sCard($key);
    }

    static function inc($key,$step =1){
        $redis = self::instance();
        return $redis->incr($key,$step);
    }

    static function lrange($key,$start,$end){
        $redis = self::instance();
        return $redis->lRange($key,$start,$end);
    }
}
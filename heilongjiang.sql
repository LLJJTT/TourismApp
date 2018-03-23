/*
 Navicat Premium Data Transfer

 Source Server         : lijinghuan
 Source Server Type    : MySQL
 Source Server Version : 100110
 Source Host           : localhost
 Source Database       : heilongjiang

 Target Server Type    : MySQL
 Target Server Version : 100110
 File Encoding         : utf-8

 Date: 03/23/2018 09:57:51 AM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `city`
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `collection`
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '1',
  `scenery_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `recommend`
-- ----------------------------
DROP TABLE IF EXISTS `recommend`;
CREATE TABLE `recommend` (
  `id` int(11) NOT NULL,
  `city_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `route` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `introduce` text,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `scenery`
-- ----------------------------
DROP TABLE IF EXISTS `scenery`;
CREATE TABLE `scenery` (
  `scenery_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `level` int(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `route` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `introduce` text,
  `src` varchar(255) DEFAULT NULL,
  `city_id` varchar(255) DEFAULT NULL,
  `collect_many` int(11) DEFAULT NULL,
  PRIMARY KEY (`scenery_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(11) NOT NULL,
  `passWord` varchar(16) NOT NULL,
  PRIMARY KEY (`id`,`phoneNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;

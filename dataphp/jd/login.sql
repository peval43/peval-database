/*
Navicat MySQL Data Transfer

Source Server         : hehe
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : login

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-08-13 15:31:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `jingdong`
-- ----------------------------
DROP TABLE IF EXISTS `jingdong`;
CREATE TABLE `jingdong` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `picurl` varchar(199) DEFAULT NULL,
  `title` varchar(99) CHARACTER SET utf8 DEFAULT NULL,
  `price` float(7,2) unsigned DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of jingdong
-- ----------------------------
INSERT INTO `jingdong` VALUES ('3', 'https://img14.360buyimg.com/jdcms/s300x300_jfs/t3916/35/1545028667/200093/2508e430/587c5986N769ebc71.jpg.webp', 'ä¼Šåˆ© å®‰æ…•å¸Œå¸Œè…Šé£Žå‘³å¸¸æ¸©é…¸å¥¶åŽŸå‘³205g*16ç›’', '66.00');
INSERT INTO `jingdong` VALUES ('4', 'https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/7842/34/8541/74491/5c0f2e52E6633ac34/c40046407bc151f6.jpg.webp', 'é›•èŠ±åˆ€304ä¸é”ˆé’¢é»„ç“œå·ä¸åˆ€åˆ›æ„èŠ±æ ·ç›˜é¥°åˆ‡èœç¥žå™¨é­”å¹»èžºæ—‹å™¨é»„ç“œéº»èŠ±åˆ€ (2', '66.00');
INSERT INTO `jingdong` VALUES ('5', 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/58388/15/3563/262757/5d17282dE357de3f8/2e8a825017064ec4.jpg.webp', 'ã€ä¸ƒå¤•æƒ…äººèŠ‚ã€‘å©†å©†åŒ…æ–œæŒŽåŒ…é’¥åŒ™é›¶é’±åŒ…æ‰‹æ‹Žå°åŒ…åŒ…å¥³åŒ…æ‰‹æ‹¿ä¸­è€å¹´äººä¹°èœ', '59.60');
INSERT INTO `jingdong` VALUES ('6', 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/45575/5/3107/82130/5d0f436bEb200b8a4/0fe1ec33384b9156.jpg.webp', 'æŠ–éŸ³æœ‹å…‹PANKåå…‰å¤å¤æ¬§ç¾Žæ½®äººåŠæ¡†è¿‘è§†å¤ªé˜³çœ¼é•œç”·å¥³å£«é©¾é©¶å¢¨é•œ è“è‰²æ°´é“¶(', '104.00');
INSERT INTO `jingdong` VALUES ('7', 'https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/36138/4/12290/50416/5d045d8dEae3e482d/48d3893c71a6cabe.jpg.webp', 'å®¢åŽ…è£…é¥°ç”»çŽ°ä»£ç®€çº¦è£…é¥°ç”»å®žæœ¨å¤§ç›¸æ¡†æŒ‚å¢™è¯ä¹¦æ‹¼å›¾æµ·æŠ¥æ¡†å¹¿å‘Šç”»æ¡† å¢¨è·A-', '99.00');
INSERT INTO `jingdong` VALUES ('8', 'https://img10.360buyimg.com/jdcms/s300x300_jfs/t26425/334/1085823577/361001/97464b1b/5bc05300N59357d52.jpg.webp', 'ã€äº¬ä¸œå®šåˆ¶æ¬¾ã€‘çˆ±åº·å›½å®¾å…³çˆ±ç²¾è‹±é‡‘å¡ç¤¼ç›’å¥—é¤ å®žç‰©å¡ ç”·å¥³é€šç”¨', '1258.00');
INSERT INTO `jingdong` VALUES ('9', 'https://img20.360buyimg.com/jdcms/s300x300_jfs/t1/39353/28/13490/196798/5d4b8e37Efbdcabd4/b9ff49c719ba4c6c.jpg.webp', 'ä¸‰åªæ¾é¼ éº»è¾£å‘³èœ€é¦™ç‰›è‚‰ ä¼‘é—²é›¶é£Ÿè‚‰è„¯ç‰›è‚‰å¹²æ‰‹æ’•ç‰›è‚‰100g/è¢‹', '26.90');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `email` varchar(99) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhangsan', '123456', 'zhangsan@126.com', '99999999.00', '2019-08-13 10:53:35');

SET NAMES UTF8;
DROP DATABASE IF  EXISTS yimiao;
CREATE DATABASE yimiao CHARSET=UTF8;
USE yimiao; 
/*
 Navicat Premium Data Transfer

 Source Server         : mydb
 Source Server Type    : MySQL
 Source Server Version : 100109
 Source Host           : localhost:3306
 Source Schema         : yimiao

 Target Server Type    : MySQL
 Target Server Version : 100109
 File Encoding         : 65001

 Date: 28/04/2021 23:56:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hcinfo
-- ----------------------------
DROP TABLE IF EXISTS `hcinfo`;
CREATE TABLE `hcinfo`  (
  `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '地区医院表',
  `live_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '城区名称',
  `hcinfor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '医院名称',
  `hcaddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '医院地址',
  `hctime` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '预约时间',
  `vaccId` tinyint(1) NULL DEFAULT 1 COMMENT '疫苗编号 001:新冠疫苗',
  `vacName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '疫苗名称',
  `vaccincount` int(20) NULL DEFAULT NULL COMMENT '疫苗初始数量',
  `vaccincoutnow` int(20) NULL DEFAULT NULL COMMENT '疫苗剩余数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 35 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hcinfo
-- ----------------------------
INSERT INTO `hcinfo` VALUES (1, '滨江区', '杭州武警医院疫苗', '浙江省杭州市滨江区江南大道86号（钱江三桥南端）', '每周四|上午08:00-12:00', 1, '新冠肺炎疫苗', 100, 37);
INSERT INTO `hcinfo` VALUES (2, '滨江区', '浙江中医药大学疫苗', '浙江省杭州市滨江区滨文路548号', '每周四|上午08:00-12:01', 1, '新冠肺炎疫苗', 100, 38);
INSERT INTO `hcinfo` VALUES (3, '滨江区', '浙江省人民医院滨江分院', '杭州市滨江区西兴镇人民路14号', '每周四|上午08:00-12:02', 1, '新冠肺炎疫苗', 100, 39);
INSERT INTO `hcinfo` VALUES (4, '上城区', '杭州市上城区小营街道社区卫生服务中心', '浙江省杭州市民生路13号', '每周四|上午08:00-12:03', 1, '新冠肺炎疫苗', 100, 40);
INSERT INTO `hcinfo` VALUES (5, '上城区', '杭州长安医院', '杭州市上城区江城路307号', '每周四|上午08:00-12:04', 1, '新冠肺炎疫苗', 100, 41);
INSERT INTO `hcinfo` VALUES (6, '上城区', '浙江省第一医院', '杭州市庆春路79号', '每周四|上午08:00-12:05', 1, '新冠肺炎疫苗', 100, 42);
INSERT INTO `hcinfo` VALUES (7, '上城区', '浙医二院', '浙江杭州市解放路88号', '每周四|上午08:00-12:06', 1, '新冠肺炎疫苗', 100, 43);
INSERT INTO `hcinfo` VALUES (8, '上城区', '杭州中兴医院', '杭州市上城区秋涛路264号', '每周四|上午08:00-12:07', 1, '新冠肺炎疫苗', 100, 44);
INSERT INTO `hcinfo` VALUES (9, '上城区', '杭州市上城区南星社区卫生服务中心', '浙江省杭州市秋涛路56号', '每周四|上午08:00-12:08', 1, '新冠肺炎疫苗', 100, 45);
INSERT INTO `hcinfo` VALUES (10, '上城区', '上城区望江街道在水一方社区服务站', '浙江省杭州市上城区天福花苑13幢', '每周四|上午08:00-12:09', 1, '新冠肺炎疫苗', 100, 46);
INSERT INTO `hcinfo` VALUES (11, '下城区', '浙江省儿童医院,浙江省儿童保健院', '杭州市下城区竹竿巷57号', '每周四|上午08:00-12:10', 1, '新冠肺炎疫苗', 100, 47);
INSERT INTO `hcinfo` VALUES (12, '下城区', '浙江省立医院', '杭州市上塘路158号', '每周四|上午08:00-12:11', 1, '新冠肺炎疫苗', 100, 48);
INSERT INTO `hcinfo` VALUES (13, '下城区', '杭州市预防保健门诊部', '浙江省杭州市下城区朝晖二区5幢', '每周四|上午08:00-12:12', 1, '新冠肺炎疫苗', 100, 49);
INSERT INTO `hcinfo` VALUES (14, '下城区', '杭州耳鼻喉医院_杭州鼻炎医院', '杭州市下城区绍兴路400号', '每周四|上午08:00-12:13', 1, '新冠肺炎疫苗', 100, 50);
INSERT INTO `hcinfo` VALUES (15, '江干区', '杭州市江干区闸弄口街道社区卫生服务中心', '浙江省杭州市江干区三里亭苑二区24幢', '每周四|上午08:00-12:14', 1, '新冠肺炎疫苗', 100, 51);
INSERT INTO `hcinfo` VALUES (16, '江干区', '杭州市江干区中医院', '杭州市南星统一码头98号', '每周四|上午08:00-12:15', 1, '新冠肺炎疫苗', 100, 52);
INSERT INTO `hcinfo` VALUES (17, '江干区', '杭州市江干区凯旋街道社区卫生服务中心', '浙江省杭州市江干区景芳三区60幢', '每周四|上午08:00-12:16', 1, '新冠肺炎疫苗', 100, 53);
INSERT INTO `hcinfo` VALUES (18, '江干区', '杭州城东医院', '杭州市江干区德胜东路3339号3幢（杭州九堡汽车客运中心', '每周四|上午08:00-12:17', 1, '新冠肺炎疫苗', 100, 54);
INSERT INTO `hcinfo` VALUES (19, '拱墅区', '拱墅区康桥医院', '浙江省杭州市拱墅区康桥路178号', '每周四|上午08:00-12:18', 1, '新冠肺炎疫苗', 100, 55);
INSERT INTO `hcinfo` VALUES (20, '拱墅区', '拱墅区惠民医院', '拱墅区上塘路518号', '每周四|上午08:00-12:19', 1, '新冠肺炎疫苗', 100, 56);
INSERT INTO `hcinfo` VALUES (21, '拱墅区', '杭州市拱墅区和睦街道社区卫生服务中心', '浙江省杭州市拱墅区莫干山路642号', '每周四|上午08:00-12:20', 1, '新冠肺炎疫苗', 100, 57);
INSERT INTO `hcinfo` VALUES (22, '拱墅区', '杭州市拱墅区米市巷街道社区卫生服务中心', '浙江省杭杭州市拱墅区湖墅南路夹城巷47号', '每周四|上午08:00-12:21', 1, '新冠肺炎疫苗', 100, 58);
INSERT INTO `hcinfo` VALUES (23, '西湖区', '浙江省针灸推拿医院、浙江省中山医院', '杭州市莫干山路219号', '每周四|上午08:00-12:22', 1, '新冠肺炎疫苗', 100, 59);
INSERT INTO `hcinfo` VALUES (24, '西湖区', '杭州市西湖区转塘社区卫生服务中心', '浙江省杭州市转塘庙山东村6号', '每周四|上午08:00-12:23', 1, '新冠肺炎疫苗', 100, 60);
INSERT INTO `hcinfo` VALUES (25, '西湖区', '浙江大学校医院（玉泉校区）', '浙江省杭州市玉古路20号', '每周四|上午08:00-12:24', 1, '新冠肺炎疫苗', 100, 61);
INSERT INTO `hcinfo` VALUES (26, '西湖区', '杭州市第三人民医院', '杭州市西湖大道38号', '每周四|上午08:00-12:25', 1, '新冠肺炎疫苗', 100, 62);
INSERT INTO `hcinfo` VALUES (27, '萧山区', '萧山医院', '杭州市萧山区育才北路728号', '每周四|上午08:00-12:26', 1, '新冠肺炎疫苗', 100, 63);
INSERT INTO `hcinfo` VALUES (28, '萧山区', '浙江省新华医院', '杭州市潮王路318号', '每周四|上午08:00-12:27', 1, '新冠肺炎疫苗', 100, 64);
INSERT INTO `hcinfo` VALUES (29, '萧山区', '杭州市萧山区第一人民医院', '杭州市萧山区城厢镇市心中路199号', '每周四|上午08:00-12:28', 1, '新冠肺炎疫苗', 100, 65);
INSERT INTO `hcinfo` VALUES (30, '萧山区', '萧山经济技术开发区医院', '杭州市萧山经济技术开发区宁税路68号', '每周四|上午08:00-12:29', 1, '新冠肺炎疫苗', 100, 66);
INSERT INTO `hcinfo` VALUES (31, '余杭区', '余杭区第一人民医院', '杭州市余杭区临平迎宾路369号', '每周四|上午08:00-12:30', 1, '新冠肺炎疫苗', 100, 67);
INSERT INTO `hcinfo` VALUES (32, '余杭区', '杭州师范学院附属医院', '杭州市余杭区临平镇保健路28号', '每周四|上午08:00-12:31', 1, '新冠肺炎疫苗', 100, 68);
INSERT INTO `hcinfo` VALUES (33, '余杭区', '杭州市余杭区第三人民医院', '杭州市余杭区大桥北路88号', '每周四|上午08:00-12:32', 1, '新冠肺炎疫苗', 100, 69);
INSERT INTO `hcinfo` VALUES (34, '余杭区', '杭州市余杭区第五人民医院', '杭州市余杭区广和街', '每周四|上午08:00-12:33', 1, '新冠肺炎疫苗', 100, 70);

-- ----------------------------
-- Table structure for healthnews
-- ----------------------------
DROP TABLE IF EXISTS `healthnews`;
CREATE TABLE `healthnews`  (
  `id` int(2) NOT NULL,
  `newstitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `newsinfo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;
-- ----------------------------
-- Records of healthnews
-- ----------------------------
INSERT INTO `healthnews` VALUES (1, '好的心态对健康的帮助是什么？', '心态，就是心大一点。心态好，人缘好，因为懂得宽容；心态好，做事顺利，因为不拘小节；心态好，生活愉快，因为懂得放下。\r\n别让脾气和本事一样大，越有本事的人越没脾气。心态好的人，处处圆融，处处圆满。好的心态，能激发人生最大的潜能，是你最大的财富。\r\n坏心情不但贬低了我们的形象，还降低了我们的能力，扰乱了我们的思维，从而输给了自己。继而影响到我们的健康。\r\n控制好心情，生活才会处处祥和。好的心态塑造好心情，好心情塑造最出色的你，你才会身心康泰', 'images/7.jpg');
INSERT INTO `healthnews` VALUES (2, '健康帮助思想', '帮助你转变思想模式，让你的思想更健康，从而创造更平衡、更健康的生活。它还能帮助你对自己的情绪和思想感到更多的控制，帮助你改善态度、健康和幸福感。这个公式结合了多位健康专家的建议，致力于帮助人们提高睡眠质量。 其核心思想便是：安排好睡前的时间分配。这个公式结合了多位健康专家的建议，致力于帮助人们提高睡眠质量。 其核心思想便是：安排好睡前的时间分配。这个公式结合了多位健康专家的建议，致力于帮助人们提高睡眠质量。 其核心思想便是：安排好睡前的时间分配。', 'images/8.jpg');
INSERT INTO `healthnews` VALUES (3, '饮食对健康的重要性', '有一件事，大多数人都不会经常想到，除非他们有问题，是他们的肚子健康。消化被定义为人体吸收食物并通过血液将营养物质传递到身体其他区域的过程。研究表明，消化不良会导致各种健康问题，如胃溃疡、恶心、呕吐以及可能的肠易激综合症。有许多人不知道他们应该做什么来帮助照顾他们的消化系统。以下是一些有希望帮助他们的建议。你需要知道的第一件事是如何吃得好。这不仅包括知道正确的食物种类，还包括吃自己的过程。你可能还记得你的父母在你还是个孩子的时候告诉你，在吞咽食物之前要好好咀嚼，这里面有很多事实。这有助于消化过程，因为你的胃', 'images/9.jpg');
INSERT INTO `healthnews` VALUES (4, '如何使用运动与健康的帮助与反馈功能', '一般来说我们说运动本身才是一种对身体的好处。运动的益处还是挺多的，比如说我们在运动的时候体内的多余脂肪会减少，肌肉会增加，男孩子会变得看起来更健壮，女孩子的线条也会更加美丽。如果是小孩子多运动可以促进生长发育，个子长的更高，中老年可以让自己的身体保持健康，活的更久', 'images/10.jpg');
INSERT INTO `healthnews` VALUES (5, '提升呼吸和循环系统功能', '通过长期运动来锻炼自己的心肺功能，吃非常有帮助的，数据表明，经常运动者的心脏体积比一般人的心脏体积大，平静时每分钟的脉搏次数比不喜欢运动者的脉搏次数少，而每搏输出量比不喜欢运动者大。不喜欢运动者平静时每分钟输出血量约5000毫升，剧烈运动时约为20000毫升，而经常运动者剧烈运动时每分钟输出血量则可以达到35000毫升。而青春期是体育锻炼效果比较理想的时期，如果在青春期加强体育锻炼，那么运动的好处将延续他的一生。', 'images/11.jpg');
-- ----------------------------
-- Table structure for liveid
-- ----------------------------
DROP TABLE IF EXISTS `liveid`;
CREATE TABLE `liveid`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '中间关联表id',
  `holdid` int(11) NULL DEFAULT NULL COMMENT '基础信息 城区字段',
  `live_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '对应的区域名字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of liveid
-- ----------------------------
INSERT INTO `liveid` VALUES (1, 1, '滨江区');
INSERT INTO `liveid` VALUES (2, 2, '上城区');
INSERT INTO `liveid` VALUES (3, 3, '下城区');
INSERT INTO `liveid` VALUES (4, 4, '江干区');
INSERT INTO `liveid` VALUES (5, 5, '拱墅区');
INSERT INTO `liveid` VALUES (6, 6, '西湖区');
INSERT INTO `liveid` VALUES (7, 7, '萧山区');
INSERT INTO `liveid` VALUES (8, 8, '余杭区');
INSERT INTO `liveid` VALUES (9, 9, '富阳区');
INSERT INTO `liveid` VALUES (10, 10, '临安区');

-- ----------------------------
-- Table structure for liver
-- ----------------------------
DROP TABLE IF EXISTS `liver`;
CREATE TABLE `liver`  (
  `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '基础信息id',
  `usersid` int(4) NULL DEFAULT NULL COMMENT '用户表id',
  `household` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '户籍地址省和市',
  `household-info` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '户籍详细地址',
  `holdid` tinyint(1) NULL DEFAULT 1 COMMENT '居住地址: 1:西湖区 2:江干区 3：上城区 4:滨江区',
  `hold_info` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '现居住详细地址',
  `workplace` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '工作单位',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of liver
-- ----------------------------
INSERT INTO `liver` VALUES (1, 1, '浙江省杭州市', 'WC', 1, 'WC', 'WC');
INSERT INTO `liver` VALUES (2, 2, '黑龙江省大庆市', '龙凤区聚福园', 1, '无', '浙江市政府省委书记办事处');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户表id',
  `username` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `avator` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户头像',
  `sex` tinyint(255) NULL DEFAULT 0 COMMENT '性别 0:男 1：女',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `idicator` varchar(19) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `brithday` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '出生日期',
  `status` tinyint(255) NULL DEFAULT 0 COMMENT '用户是否选择医院0:否 1:是',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'pxy', '123456', NULL, 1, '18094609493', '1111111111111111', NULL, 0);
INSERT INTO `users` VALUES (2, '于超', '123456', NULL, 1, '18094609493', '230603199511080214', '1995-11-08', 0);
INSERT INTO `users` VALUES (3, 'zss', 'e10adc3949ba59abbe56', NULL, 0, NULL, NULL, NULL, 0);

-- ----------------------------
-- Table structure for wotitle
-- ----------------------------
DROP TABLE IF EXISTS `wotitle`;
CREATE TABLE `wotitle`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of wotitle
-- ----------------------------
INSERT INTO `wotitle` VALUES (1, '什么是预防接种?', '预防接种，就是我们平时常说的“打预防针”。预防接种是保障孩子健康成长、抵御传染性疾病侵袭的最有效、最经济、最简便的措施。\r\n\r\n通过接种疫苗，能刺激人体产生相应的抗体，使人获得免疫力，不再感染某些传染病，或即使得了，症状也非常轻微，愈后良好。\r\n\r\n通过实施有计划的预防接种，全球已经成功消灭了天花，包括中国的大多数国家和地区已经实现无脊灰野病毒传播的目标。我国通过普及儿童免疫，因百日咳、白喉、破伤风和麻疹导致的发病、致残与死亡显著下降，乙脑、流脑等发病人数降至历史最低水平。', 'images/1.jpg');
INSERT INTO `wotitle` VALUES (2, '为什么接种疫苗后要留观至少30分钟?', '接种疫苗以后，由于个体原因，极少数人可能会发生过敏反应。监测数据表明，过敏性休克大多发生在接种后30分钟内，发生过敏性休克后，如果不在医务人员监护范围之内容易发生生命危险，所以接种现场必须配有医生和急救药品，主要是防止发生意外。\r\n\r\n如果监护人怀疑自己的孩子接种疫苗发生了不良反应，就应该及时向接种人员或疾病预防控制中心咨询或报告。', 'images/2.jpg');
INSERT INTO `wotitle` VALUES (3, '新生儿为什么要在出生后24小时内及时接种乙肝疫苗?', '因为新生儿对乙肝病毒无免疫力，而且免疫功能尚不健全，一旦感染了乙肝病毒，则易成为乙肝病毒表面抗原携带者。＜1岁婴儿感染乙肝病毒后，将有90%以上的人会变成慢性乙肝病毒表面抗原携带者。由此可见，新生儿预防乙肝尤为重要。所有的新生儿都应当在出生后24小时内尽早接种第1剂乙肝疫苗，并按照0、1、6月龄的免疫程序，完成3剂乙肝疫苗的全程接种。', 'images/4.jpg');
INSERT INTO `wotitle` VALUES (4, '接种疫苗需注意什么?', '接种疫苗前，要了解接种疫苗的品种、作用、禁忌、不良反应以及注意事项，接种后，儿童要在接种现场留观30分钟，一旦出现可疑反应可得到及时处理。\r\n\r\n儿童家长在每次接种疫苗前要向接种人员提供孩子的既往和近期健康状况、既往接种史和反应史等情况，如有接种禁忌症等，以确定儿童是否可以接种相关疫苗。', 'images/3.jpg');
INSERT INTO `wotitle` VALUES (5, '为什么要给孩子预防接种?', '婴儿出生后，体内往往还有来自妈妈的各种“抵御疾病”的抗体，尤其用母乳喂养者，奶汁中还含一定量的抗体。因此，婴儿在半岁内很少得传染病。但是，婴儿6个月以后，来自母体的抗体免疫逐渐消退，抵抗力会逐渐减弱和消失，此时若接触病毒、细菌等病原体，孩子就容易受一些传染病的传染。\r\n\r\n为了提高儿童抵抗传染病的能力，就需要有计划地按时给儿童进行预防接种，使孩子自身产生抵抗力，预防传染病的发生，保护儿童健康地成长。', 'images/5.jpg');
INSERT INTO `wotitle` VALUES (6, '疫苗的流通过程', '在每一支疫苗注入孩子体内之前，除了保证疫苗本身的质量，更重要的是疫苗的流通过程。疫苗的生产、运输等各个环节一直与冷链密不可分。疫苗配送需要的是一个苛刻的冷链运输。疫苗生产完成经过检测后，由企业的冷藏运输将疫苗送至省疾控中心的冷库保存，整个过程都须保持在2℃至8℃，到达省级疾控中心后，疫苗会被二次运输，继续通过冷链运输到各个市级疾控中心的冷库中，再由市级疾控中心通过冷藏运输把疫苗逐级下发到县级疾控中心，县级疾控中心通过冷藏运输再将疫苗发往到各接种点。', 'images/6.jpg');

SET FOREIGN_KEY_CHECKS = 1;

DROP TABLE IF EXISTS `xinwen`;
CREATE TABLE xinwen(
	head varchar(72),
	data varchar(20),
	content varchar(2000) 
); 
insert into xinwen values('宝宝是左撇子，要强行纠正吗','2017-06-04 10:17:40','<p>孩子做事情总习惯用左手，一些爸爸妈妈认为非常奇怪，有的小朋友也会因此变得不太合群。那么，如果孩子惯用左手的话，是否需要帮助孩子纠正吗？
	</p><p>1.没有必要强行纠正</p>
        <p>孩子和别的小朋友在一起的时候，有时候会因为使用左手导致一些问题，所以爸爸妈妈会考虑是不是要帮助孩子纠正。<br>育儿专家表示，其实没有这个必要，只要没有影响生活，用哪只手都是可以的。不过爸爸妈妈一定要赶快帮助孩子解决生活中的问题，让宝宝能够和他人和谐相处，让孩子能够收获友谊，而不是陷入独立状态。
	</p>
        <p>2.使用左手或更聪明</p>
        <p>手是由大脑操控的，人类的右脑又被叫做“艺术脑”、“智慧脑”，平时使用左手的人会更多地使用右脑部分，这样就可以通过刺激脑叶而掌握更多的艺术天赋，让孩子发展地更好。<br>所以说，爸爸妈妈平时可以鼓励孩子多使用一下左手，这样可以刺激右脑的开发。平时生活中，大家都普遍使用右手，所以爸爸妈妈可以让孩子学着用左手使用剪刀、筷子等，在日常生活中多多锻炼就好。
	</p>
        <p>3.不妨左右手一起动</p>
        <p>人类左右手分别由右左大脑主管，人类发展到现在，大脑只有很小的一部分被开发。所以说，平时多使用左右手能够帮助人类大脑的开发和运用。如果爸爸妈妈想让孩子变得更聪明，在孩子小的时候就要让孩子多使用左右手。<br>一些孩子经常用左手写字，效率低下，爸爸妈妈总是会要求他改正。专家建议爸爸妈妈可以用平常心看待，帮助孩子赶上学习进度，和老师进行沟通，共同对孩子进行帮助，而不是强行要求孩子换只手写字，这样学习速度反而会更慢。
	</p>'
			
);
insert into xinwen values('你不知道的关于宝宝爬行的小秘密','2017-06-04 09:48:09','<p>在出生几个月以后，宝宝就会开始学会爬行了。看着宝宝在地上爬来爬去的可爱样子，各位爸爸妈妈都会觉得非常幸福。事实上，在宝宝爬行过程中会有很多你不知道的小秘密，接下来就一起来看看吧。
				</p>
	<p>一、爬行的重要性</p>
        <p>要是宝宝没有经历过爬行这个阶段，那么宝宝以后将会很难学会走路。宝宝爬行的时候会把全身的体重都放在四肢上，所以这时候就要求宝宝只能靠手部和腿部的力量来支撑身体。在爬行的过程中，宝宝能够锻炼四肢的肌肉，让四肢的骨头变得更加坚实。<br>

在爬行的过程中还能够增加宝宝身体的协调能力，让宝宝能够顺利过渡到行走。宝宝从只能坐着到可以自己爬行，这过程中扩大了宝宝的行动范围，也增加了宝宝的视野。宝宝能够接触到更多的东西，会对这个世界更加熟悉，所以，也会慢慢调动起宝宝五官的运用。<br>

所以，爬行在宝宝成长过程中发挥很大的作用。另外，如果宝宝需要什么东西的话，他会主动爬向你。在还没有学会爬行之前，宝宝只能采用哭闹的方式告诉你他的需求，在学会了爬行之后，宝宝就能够通过自己的肢体语言来告知你他的想法，这何尝不是一种突破呢？	</p>
        <p>二、宝宝爬行的方式</p>
        <p>1.匍匐前进<br>

大部分的宝宝在刚刚开始学会爬行的时候，都会采用匍匐的方式。顾名思义，匍匐就是仅仅依靠着宝宝自己的手臂和腿来向前爬。<br>

宝宝用这种姿势爬行，证明宝宝现在还不能很好地控制自己的身体，没有办法保持绝对的平衡，因此只能用单侧来行走，这是他在完全爬行之前自己的小秘诀。<br>

2.往后退着跑<br>

只要你经常观察一下宝宝，你就会发现宝宝爬行的方向有时候不是向前，而是往后的，这是什么原因造成的呢？<br>

这主要是由于宝宝手臂的力量大于腿部的力量，如果想要向前进的话，不但要求手部的肌肉发达，腿部的肌肉力量也是非常重要的。所以如果宝宝腿部肌肉的发达程度比手臂要差的话，就只能往后爬了。<br>

3.往前滚着跑<br>

有的宝宝天生就比较好动，在爬行时候都不安分，宝宝会发挥自己的运动天赋往前翻滚着跑或者用屁股往前移着跑，其实这都是爱探索的宝宝所发明出来的小绝招。<br>

4.身体贴地上爬行<br>

许多的宝宝由于肚子比较圆，所以就算是已经十分用力向前爬行了，可还是只能让肚子贴在地上往前爬。</p>
        <p>三、怎样帮助宝宝爬行</p>
        <p>1.以身作则<br>

要是家里条件允许的话，爸爸妈妈可以和宝宝一起爬，有爸爸妈妈的陪伴，宝宝会觉得非常开心。有家人的关注，陪伴，这种温馨的时刻会让宝宝更有动力向前爬。<br>

2.诱惑宝宝爬行<br>

要是宝宝爬行的欲望不强的话，可以在宝宝面前放一样他喜欢的东西，让宝宝自己爬过去拿。<br>

3.提高手部和腿部的力量<br>

为了让宝宝可以更好地爬行，可以帮助宝宝做一些能够帮助手部和腿部肌肉增长的运动。<br>

上面就是小编给各位爸爸妈妈的建议了。如果你的宝宝现在依旧还没有爬行的话，也不要太着急。还有很多孩子都不需要练习爬行，直接就可以直立行走了呢。s</p>'
			
);
insert into xinwen values('留守儿童在成长过程中会遇到的问题','2017-06-04 10:48:35','<p>因为我国特有的农民工进城务工现象，导致在乡村留下了大批的留守儿童，他们长期与父母分离，缺少父母的关爱。

正是因为如此，这些孩子身上很容易发生问题，也就是人们常说的留守儿童现象所产生的问题，这将影响到孩子健康成长和后续融入社会学习工作生活的幸福指数。
	</p><p>1.花钱大手大脚</p>
        <p>由于一直没有在孩子身边，留守儿童爸爸妈妈就想着回去的时候多给孩子一些钱，给孩子买好吃的，好穿的，让孩子过着较好的物质生活。<br>
其实爸爸妈妈这样的做法是不对的，在孩子没有人管的情况下，给孩子过多的钱会让孩子养成乱花钱的坏习惯，不懂得爸爸妈妈的钱来之不易，不懂得感恩，只会追求物质生活，造成孩子的畸形心理，对孩子的影响是很大的。
</p>
        <p>2.影响学习</p>
        <p>由于经常不和爸爸妈妈在一起，就无法得到爸爸妈妈的约束和关爱，所以亲子之间的感情会比较淡漠，家里的老人学习程度不高，无法指导孩子学习，往往让孩子吃饱穿暖就很不错了。<br>
因此，孩子的学习态度也不认真，觉得读书不是为自己读书，这样成绩肯定很不好。而且现实情况是，大部分的留守儿童往往只读了一个初中就开始工作了，导致这种现象的原因就是缺少家庭温暖和关爱。</p>
        <p>3.性格不好</p>
        <p>由于一直没有受到爸爸妈妈的鼓励肯定，所以孩子的性格会慢慢变得倔强、任性。他们觉得没有人管自己，所以会变得很任性，想到什么就去做，冲动的性格令他们脾气也很大，只要有一点不顺心的就会对着家里的爷爷奶奶外公外婆发脾气。<br>
老人年纪大了，没有办法管孩子，所以就顺其自然了。同时这样的孩子也是自卑的，他们生怕被人瞧不起，生怕有人说他们没父母，尤其是在家长会等需要父母出席的场合之下，孩子的内心很难受。</p>
	 <p>4.没有纪律性</p>
	 <p>因为爸爸妈妈不经常回来，家里老人又管不住自己。于是留守儿童的组织纪律性是很差的，随意迟到、无故旷课时有发生。<br>

因为爸爸妈妈在很远的地方工作，就算孩子表现不好，也没有办法请家长，爷爷奶奶对于教育又不是很懂。所以老师拿他们没有办法，时间一长孩子就变成了一个目无组织性纪律性的孩子，这对孩子的影响是非常大的。<br>

不爱学习的孩子会在很早的时候就离开学校在社会上混，结交一些不良小混混，这是非常危险的。<br>

所以各位在外面工作的爸爸妈妈，一定要多关心家里的孩子，如果可以的话，可以把孩子带在身边，平时多回去看孩子，多跟孩子交流。</p>'
);
DROP TABLE IF EXISTS `zhishi`;
CREATE TABLE zhishi(
	lid int primary key auto_increment,
	head varchar(72),
	dianyue varchar(24),
	image varchar(12),
	zhishi_id int
); 
insert into zhishi values(null,'[啪啪啪]没有性高潮怎么办？','1.5','1.jpeg','1');
insert into zhishi values(null,'丙肝|威力丝毫不下于乙肝，但全国仅有2%的人知道它...','1.2','2.jpeg','1');
insert into zhishi values(null,'生不出儿子就是女人的错？','0.2','3.jpeg','1');
insert into zhishi values(null,'[下面]黑不黑，和啪多少有关吗','3.1','4.jpeg','1');
insert into zhishi values(null,'这些避孕法，比男人的嘴更不靠谱','6.2','5.jpeg','1');
insert into zhishi values(null,'这两个问题，给大家提个醒，一定得注意下','3.2','6.jpeg','1');
insert into zhishi values(null,'从没想过生二胎，还生出离婚的念头','5.2','7.jpeg','1');
insert into zhishi values(null,'1岁男孩学父亲打母亲，糟糕的夫妻关系是毁掉孩子最直接的方法','2.3','8.jpeg','1');
insert into zhishi values(null,'雾霾和甲醛，有多远，就远离孩子','2.3','9.jpeg','1');
insert into zhishi values(null,'吐槽婆婆一年，是时候给你看看真相','2.3','10.jpeg','1');

insert into zhishi values(null,'不洗手是“百病之源，宝宝不爱洗','1.5','11.jpeg','2');
insert into zhishi values(null,'宝宝食欲不振，肝气郁结怎么办？','12','12.jpeg','2');
insert into zhishi values(null,'家长如何应对宝宝积痰问题？','0.2','13.jpeg','2');
insert into zhishi values(null,'好胎记还是坏胎记 专家教你识别','3.1','14.jpeg','2');
insert into zhishi values(null,'宝宝腹泻需注意的那些事儿','6.2','15.jpeg','2');
insert into zhishi values(null,'宝宝在医院体检后不宜多逗留','3.2','16.jpeg','2');
insert into zhishi values(null,'小孩尿床怎么办','5.2','17.jpeg','2');
insert into zhishi values(null,'刚出生的宝宝打嗝','2.3','18.jpeg','2');
insert into zhishi values(null,'孩子怎样预防近视','2.3','19.jpeg','2');
insert into zhishi values(null,'如何用物理的方法给宝宝发热降温','2.3','20.jpeg','2');

insert into zhishi values(null,'狂犬有疫苗，人心呢？','1.5','21.jpeg','3');
insert into zhishi values(null,'疫苗界“郭美美”，炫爱马仕包，劳斯莱斯车：孩子们的血和肉，就...','12','2.jpeg','3');
insert into zhishi values(null,'郑渊洁：我从1995年起就不信任一些疫苗','0.2','23.jpeg','3');
insert into zhishi values(null,'问题疫苗已打入21万孩子身体：比问题疫苗更可怕的是，拒绝疫苗','3.1','24.jpeg','3');
insert into zhishi values(null,'给鸽子做新城疫疫苗','6.2','25.jpeg','3');
insert into zhishi values(null,'疫苗事件：都在一条船上，别让良知泯灭','3.2','26.jpeg','3');
insert into zhishi values(null,'小孩尿床怎么办','5.2','27.jpeg','3');
insert into zhishi values(null,'疫苗事件：都在一条船上，别让良知泯灭','2.3','28.jpeg','3');
insert into zhishi values(null,'“盐味”疫苗','2.3','29.jpeg','3');
insert into zhishi values(null,'为什么疫苗事件把我们当父母的都惹毛了？','2.3','30.jpeg','3');

insert into zhishi values(null,'孩子最佳睡眠时间是多久？大多数父母都想错了','1.5','31.jpeg','4');
insert into zhishi values(null,'小宝宝究竟应该怎么睡，平躺还是侧躺？','12','32.jpeg','4');
insert into zhishi values(null,'孩子睡觉不踏实，翻来覆去是咋回事？','0.2','33.jpeg','4');
insert into zhishi values(null,'宝宝多大可以喝酸奶？冰箱里的酸奶给娃喝要加热吗？','3.1','34.jpeg','4');
insert into zhishi values(null,'宝宝腹泻需注意的那些事儿','6.2','35.jpeg','4');
insert into zhishi values(null,'3岁那年父母教我的孩子不记事？这2件事ta能记清清楚楚','3.2','36.jpeg','4');
insert into zhishi values(null,'小孩尿床怎么办','5.2','37.jpeg','4');
insert into zhishi values(null,'刚出生的宝宝打嗝','2.3','38.jpeg','4');
insert into zhishi values(null,'孩子怎样预防近视','2.3','39.jpeg','4');
insert into zhishi values(null,'如何用物理的方法给宝宝发热降温','2.3','40.jpeg','4');

DROP TABLE IF EXISTS `nav`;
CREATE TABLE nav(
	lid int primary key auto_increment,
	head varchar(12)
); 
insert into nav values(null,'推荐');
insert into nav values(null,'育儿');
insert into nav values(null,'疫苗');
insert into nav values(null,'健康');
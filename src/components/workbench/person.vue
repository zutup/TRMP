<template>
  <div>
    <!-- 面包屑 -->
    <router-view></router-view>
    <el-menu-item index="welcome">首页</el-menu-item>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/Welcome' }">欢迎页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Welcome' }"
        >我的工作台</el-breadcrumb-item
      >
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
    <el-carousel
      :interval="4000" type="card" height="450px"
    >
      <el-carousel-item v-for="item in imgList" :key="item.name" @click="go">
        <a href="https://gitee.com/zouxianchen/vue_shop">
        <img
          :src="item.src"
          style="height:100%;width:100%;"
          alt="图片丢失了"
          :title="item.title"
        />
        </a>
      </el-carousel-item>
    </el-carousel>
    <el-card style="width:1700px text-align:center; position: absolute;left:10%;right:10%;">
      <h2>物联网安全威胁情报系统</h2>
      <p>
        随着物联网的快速发展和广泛应用，物联网安全问题日益凸显。物联网的多源异构性、开放性、泛在性使其面临巨大的安全威胁。本课题旨在通对物联网威胁情报的收集与分析，发掘物联网存在的潜在威胁并提供威胁处理方案。本课题可划分为以下四个子任务："
      </p>
      <ul>
        <li>
          威胁情报收集。获取的外部情报包括：互联网公开的漏洞信息、安全事件信息和网络安全预警信息等。获取的内部情报包括：入侵检测系统报警日志、安全软件系统日志、内部环境数据等。
        </li>
        <li>
          威胁情报分析。通过威胁情报信息挖掘、特征提取，识别物联网面临的威胁和危险。
        </li>
        <li>
          威胁情报的ATT&CK映射。提取威胁情报中包含的TTPs（策划、技术和过程）信息，并映射到ATT&CK框架，提供对应的威胁解决措施。
        </li>
        <li>
          整体系统架构。需要对系统整体的技术路线和使用工具有整体了解，对系统整体的设计和实现做出具体规划，确保数据在各个阶段的一致性和可用性，确保技术路线的一致性和可用性。
        </li>
      </ul>

      <h3>仓库地址</h3>
      <h4>前端仓库：</h4>
      <a href="https://gitee.com/zouxianchen/vue_shop"
        >https://gitee.com/zouxianchen/vue_shop</a
      >
      <h4>后台仓库：</h4>
      <a href="https://gitee.com/M00nBack/IOT_security_system"
        >https://gitee.com/M00nBack/IOT_security_system</a
      >
      <h3>实现</h3>
      <p>前端技术栈</p>
      <ul>
        <li>
          Vue、html、js、css、ElementUi、node.js
        </li>
      </ul>
      <p>后端技术栈</p>
      <ul>
        <li>
          springboot、mybatis、druid、springmvc
        </li>
      </ul>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 18pt;
            font-weight: bold;
          "
          >前端设计</span
        ></p>
        <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >主页</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >使用</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >head+main</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >布局，功能模块嵌套路由跳转</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >&#xa0;</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >处理中心</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >提交威胁情报，通过广泛查找返还给前端展示匹配的漏洞信息</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >&#xa0;</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >攻击知识库</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >展示了</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >METRE ATT&amp;CK</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >的企业矩阵，每个分类和技术都对应了一个详细说明的</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >url</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >&#xa0;</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >工作台</span
        ><span
          style="
            color: #40485b;
            font-family: 'Segoe UI';
            font-size: 15pt;
            font-weight: bold;
          "
          >/</span
        ><span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >分析结果</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >展示提交的情报详细分析结果</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >&#xa0;</span
        ><img
          src="7d3e6bd4-a3fd-4e78-8b4d-36779aa9263b.004.png"
          width="554"
          height="175"
          alt="分析结果"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 18pt;
            font-weight: bold;
          "
          >数据库与工具类设计</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 'Segoe UI';
            font-size: 15pt;
            font-weight: bold;
          "
          >json</span
        ><span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >转成</span
        ><span
          style="
            color: #40485b;
            font-family: 'Segoe UI';
            font-size: 15pt;
            font-weight: bold;
          "
          >SQL</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >在网上找到了</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >ATT&amp;CK</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >的中文翻译</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <img
          src="7d3e6bd4-a3fd-4e78-8b4d-36779aa9263b.005.png"
          width="32"
          height="32"
          alt="image-20210629230436438"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: character;
            -aw-rel-vpos: line;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >经查看仓库源码发现使用的</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >json</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >在：</span
        ><a
          style="color: #095eab"
          href="https://github.com/hansight/hansight.github.io/tree/master/js"
          ><span
            style="color: #095eab; font-family: 'Segoe UI'; font-size: 12pt"
            >https://github.com/hansight/hansight.github.io/tree/master/js</span
          ></a
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >主要数据存在于这三个文件中</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <img
          src="7d3e6bd4-a3fd-4e78-8b4d-36779aa9263b.005.png"
          width="32"
          height="32"
          alt="image-20210629230537097"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: character;
            -aw-rel-vpos: line;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >先简单对数据库进行设计</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >/*</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: Consolas; font-size: 10pt"
          > </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >对应</span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >matrix.json </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >有两个</span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >id </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >攻击手法</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: 宋体; font-size: 10pt"> </span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >*/</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >CREATE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >TABLE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          if </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >exists</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          attck_method(</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >int</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >primary</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >key</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          AUTO_INCREMENT,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    ta_id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >50</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >null</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >攻击手法分类</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >id"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    t_id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >50</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >null</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >攻击手法</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >id"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    name </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >100</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >攻击手法名称</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >)ENGINE=InnoDB </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >DEFAULT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          CHARSET=utf8;</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >/*</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: Consolas; font-size: 10pt"
          > </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >对应</span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >tactic_metadata.json </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >攻击手法分类</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: 宋体; font-size: 10pt"> </span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >*/</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >CREATE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >TABLE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          if </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >exists</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          attck_category(</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >int</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >primary</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >key</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          AUTO_INCREMENT,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    ta_id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >50</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >null</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >攻击手法分类</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >id"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    name </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >100</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >分类名称</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    en_short_description </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >500</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >英文简单描述</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    en_description </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >TEXT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >英文详细描述</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >    link </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >100</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"attck</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >链接</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >)ENGINE=InnoDB </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >DEFAULT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          CHARSET=utf8;</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >/*</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >对应</span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >technique_metadata.json  </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >记录攻击手法的详细信息</span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt">
        </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >由于缓解措施建议数量不定</span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >  </span
        ><span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >这里单独建一个表</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: 宋体; font-size: 10pt"> </span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >*/</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >CREATE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >TABLE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          if </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >exists</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          attck_info(</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >int</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >primary</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >key</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          AUTO_INCREMENT,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       t_id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >50</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >null</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >攻击手法</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >id"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       description </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >TEXT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >描述</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       platform </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >100</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >平台</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       permissionRequired </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >100</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >权限</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       dataSources </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >100</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >数据来源</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       detection </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >TEXT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >检测建议</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       category </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >varchar</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >100</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >  </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >属于哪类</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >&#xa0;</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >)ENGINE=InnoDB </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >DEFAULT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          CHARSET=utf8;</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >/*</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: 宋体; font-size: 10pt"
          >攻击手法的缓解措施建议</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #888888; font-family: 宋体; font-size: 10pt"> </span
        ><span style="color: #888888; font-family: Consolas; font-size: 10pt"
          >*/</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >&#xa0;</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >CREATE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >TABLE</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          if </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >exists</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          attck_mitigations(</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >int</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >primary</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >key</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          AUTO_INCREMENT,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       t_id </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >50</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >not</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >null</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >攻击手法</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >id"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       name </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >VARCHAR</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >(</span
        ><span style="color: #009999; font-family: Consolas; font-size: 10pt"
          >50</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >) </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >缓解措施名称</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >,</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >       description </span
        ><span style="color: #0086b3; font-family: Consolas; font-size: 10pt"
          >TEXT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >comment</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
        </span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        ><span style="color: #008080; font-family: 宋体; font-size: 10pt"
          >缓解措施描述</span
        ><span style="color: #008080; font-family: Consolas; font-size: 10pt"
          >"</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >)ENGINE=InnoDB </span
        ><span style="font-family: Consolas; font-size: 10pt; font-weight: bold"
          >DEFAULT</span
        ><span style="color: #333333; font-family: Consolas; font-size: 10pt">
          CHARSET=utf8;</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >然后开始解析</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >Json </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >这里使用的是</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >Google</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >的</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >json</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >库</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
        </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >参考：</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <a
          style="color: #095eab"
          href="https://blog.csdn.net/u010502101/article/details/80550167"
          ><span
            style="color: #095eab; font-family: 'Segoe UI'; font-size: 12pt"
            >https://blog.csdn.net/u010502101/article/details/80550167</span
          ></a
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >有两个方法很重要：</span
        >
      </p>
      <ul type="disc" style="margin: 0pt; padding-left: 0pt">
        <li
          style="
            background-color: #ffffff;
            color: #40485b;
            font-family: serif;
            font-size: 10pt;
            margin: 5pt 0pt 5pt 27.6pt;
            padding-left: 8.4pt;
            text-indent: 0pt;
          "
        >
          <span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >get </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >用于获得</span
          ><span
            style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >jsonObject</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >对象某个属性的值</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
          </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >返回一个</span
          ><span
            style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >JsonElement</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >对象</span
          >
        </li>
        <li
          style="
            background-color: #ffffff;
            color: #40485b;
            font-family: serif;
            font-size: 10pt;
            margin: 3pt 0pt 5pt 27.6pt;
            padding-left: 8.4pt;
            text-indent: 0pt;
          "
        >
          <span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >getAsJsonArray </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >用于获得</span
          ><span
            style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >JsonElement</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >对象的数组元素</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
          </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >返回一个</span
          ><span
            style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >JsonArray</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >对象</span
          >
        </li>
        <li
          style="
            background-color: #ffffff;
            color: #40485b;
            font-family: serif;
            font-size: 10pt;
            margin: 3pt 0pt 5pt 27.6pt;
            padding-left: 8.4pt;
            text-indent: 0pt;
          "
        >
          <span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >getAsString </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >用于获取</span
          ><span
            style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >JsonObject</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >某个字段的字符串形式</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
          </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >返回</span
          ><span
            style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >String</span
          >
        </li>
      </ul>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >最终实现三个方法分别对应三个</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >json</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >的解析：</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <img
          src="7d3e6bd4-a3fd-4e78-8b4d-36779aa9263b.005.png"
          width="32"
          height="32"
          alt="image-20210630092958731"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: character;
            -aw-rel-vpos: line;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >数据库连接</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >出了上面</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >json</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >转</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >SQL</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >的东西，还有爬虫获得的数据</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >现在尝试配置数据库连接，参考：</span
        ><a
          style="color: #095eab"
          href="https://blog.csdn.net/xiaoyao2246/article/details/83656990"
          ><span
            style="color: #095eab; font-family: 'Segoe UI'; font-size: 12pt"
            >https://blog.csdn.net/xiaoyao2246/article/details/83656990</span
          ></a
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >添加一个测试，连接成功</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <img
          src="7d3e6bd4-a3fd-4e78-8b4d-36779aa9263b.005.png"
          width="32"
          height="32"
          alt="image-20210630112918220"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: character;
            -aw-rel-vpos: line;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >文件操作类</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >该类主要作用</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >:</span
        >
      </p>
      <ul type="disc" style="margin: 0pt; padding-left: 0pt">
        <li
          style="
            background-color: #ffffff;
            color: #40485b;
            font-family: serif;
            font-size: 10pt;
            margin: 5pt 0pt 5pt 27.6pt;
            padding-left: 8.4pt;
            text-indent: 0pt;
          "
        >
          <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >存放一些路径</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
          </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >用静态属性的形式</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
          </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >可直接外部调用</span
          >
        </li>
        <li
          style="
            background-color: #ffffff;
            color: #40485b;
            font-family: serif;
            font-size: 10pt;
            margin: 3pt 0pt 5pt 27.6pt;
            padding-left: 8.4pt;
            text-indent: 0pt;
          "
        >
          <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >一些文件的常用操作</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
          </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >例如读取文件、判断文件是否存在、创建一个空文件等</span
          >
        </li>
      </ul>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 18pt;
            font-weight: bold;
          "
          >后端设计</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >跨域问题</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >以下为解决跨域问题的类</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >&#xa0;</span
        ><img
          src="7d3e6bd4-a3fd-4e78-8b4d-36779aa9263b.006.png"
          width="554"
          height="330"
          alt="跨域"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: column;
            -aw-rel-vpos: paragraph;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >系统功能</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 12pt;
            font-weight: bold;
          "
          >安装</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >采用最简单粗暴的方式</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
        </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >直接将上面获得到的</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >sql</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >执行</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
        </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >这时候就要处理两个问题</span
        >
      </p>
      <ul type="disc" style="margin: 0pt; padding-left: 0pt">
        <li
          style="
            background-color: #ffffff;
            color: #40485b;
            font-family: serif;
            font-size: 10pt;
            margin: 5pt 0pt 5pt 27.6pt;
            padding-left: 8.4pt;
            text-indent: 0pt;
          "
        >
          <span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >sql</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >中有双引号之类的会影响</span
          ><span
            style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
            >sql</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >执行</span
          >
        </li>
        <li
          style="
            background-color: #ffffff;
            color: #40485b;
            font-family: serif;
            font-size: 10pt;
            margin: 3pt 0pt 5pt 27.6pt;
            padding-left: 8.4pt;
            text-indent: 0pt;
          "
        >
          <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >为了更美观</span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
          </span
          ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
            >尽量能获得安装进度</span
          >
        </li>
      </ul>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >挖个坑。。。</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 15pt;
            font-weight: bold;
          "
          >攻击知识库实现</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >按照</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >attck</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >官网的设计思想：</span
        ><a style="color: #095eab" href="https://attack.mitre.org/"
          ><span
            style="color: #095eab; font-family: 'Segoe UI'; font-size: 12pt"
            >https://attack.mitre.org/</span
          ></a
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <img
          src="7d3e6bd4-a3fd-4e78-8b4d-36779aa9263b.005.png"
          width="32"
          height="32"
          alt="image-20210819214408547"
          style="
            -aw-left-pos: 0pt;
            -aw-rel-hpos: character;
            -aw-rel-vpos: line;
            -aw-top-pos: 0pt;
            -aw-wrap-type: inline;
          "
        />
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >每种技术分类对应一个链接</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
        </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >形如：</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >https://attack.mitre.org/tactics/TA0043</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >每种技术对应一个链接</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
        </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >形如：</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >https://attack.mitre.org/techniques/T1591</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >为了方便</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
        </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >直接将上面整合成一个链接</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >/TA0043/T1591</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >通过下面链接可以查询分类下有哪些攻击方法</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >/TA0043</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >而通过下面链接就可以查询编号为</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >T1591</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >攻击方法的详情</span
        >
      </p>
      <p style="background-color: #f6f8fa; margin: 0pt">
        <span style="color: #333333; font-family: Consolas; font-size: 10pt"
          >/TA0043/T1591</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 'Segoe UI';
            font-size: 12pt;
            font-weight: bold;
          "
          >Model</span
        ><span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 12pt;
            font-weight: bold;
          "
          >实现</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >实现两个类</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >Method</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >和</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >Category </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >分别对应攻击方法和攻击方法分类</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >这里</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >Method</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >类属性很多</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt">
        </span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >譬如攻击方法名称和修复建议均不在</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >attck_info</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >类里</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 18pt 0pt 12pt">
        <span
          style="
            color: #40485b;
            font-family: 'Segoe UI';
            font-size: 12pt;
            font-weight: bold;
          "
          >Mapper</span
        ><span
          style="
            color: #40485b;
            font-family: 宋体;
            font-size: 12pt;
            font-weight: bold;
          "
          >实现</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 12pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >由于</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >Method</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >类属性中攻击方法名称和修复建议均不在</span
        ><span style="color: #40485b; font-family: 'Segoe UI'; font-size: 12pt"
          >attck_info</span
        ><span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >类里</span
        >
      </p>
      <p style="background-color: #ffffff; margin: 0pt 0pt 5pt">
        <span style="color: #40485b; font-family: 宋体; font-size: 12pt"
          >所以在这里需要多表查询</span
        >
      </p>
      <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
        <span style="font-family: Calibri; font-size: 10.5pt">&#xa0;</span>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          name: "01",
          src: require("@/assets/css/images/wallpaper1.png"),
          title: "",
        },
        {
          name: "01",
          src: require("@/assets/css/images/wel.png"),
        },
        {
          name: "03",
          src: require("@/assets/css/images/welcome1.png"),
        },
        {
          name: "04",
          src: require("@/assets/css/images/welcome.gif"),
        },
      ],
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    go(){
      this.$router.replace("/Welcome");
    }
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 500px;
  margin: 10%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

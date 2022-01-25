<template>
<div>
    <router-view></router-view>
      <!-- <h3>以下是</h3> -->
      <el-card class="card">
        <a href="https://attack.mitre.org/" target="_blank"><h3>MITRE ATT&CK</h3></a>
      <h3>中文知识库，欢迎使用和分享</h3>
      <div>
      <h2 style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 18pt; font-weight: bold"
          >路过式攻击</span
        >
      </h2>
      <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >编号：T1189</span
        >
      </p>
      <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >战术：初始访问</span
        >
      </p>
      <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >平台：Windows，Linux，macOS，SaaS</span
        >
      </p>
      <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
        <span style="font-family: 微软雅黑; font-size: 10.5pt">权限：用户</span>
      </p>
      <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >数据来源：网络抓包，网络设备日志，网络进程使用，Web代理，网络入侵检测系统，SSL/TLS检查</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >路过式攻击指的是攻击者利用用户正常访问和浏览网站来获取系统访问权限。攻击者通常利用此技术针对用户的web浏览器来实施漏洞攻击。他们也可能会侵入网站进行非攻击行为，例如获取应用程序访问令牌。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >存在多种向浏览器传递漏洞攻击代码的方法，包括：</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >·
          注入某种形式恶意代码，例如JavaScript、iFrames和跨站脚本，来攻击合法网站。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >· 利用合法广告提供商来支付和投放恶意广告。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >·
          利用内置的web应用接口插入某种对象来显示web内容（例如：论坛帖子、评论以及其他用户可控制的web内容）或在访问客户端上执行脚本。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >攻击者通常利用特定群体（例如：政府、特殊行业或地区）访问的网站，锁定特定用户或基于共同兴趣锁定特定用户群组来实施攻击。这种针对性攻击被称为战略性web攻击或水坑攻击。已知好几个这种攻击的例子。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >典型的路过式攻击过程如下：</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >1. 用户访问某个带有攻击者控制内容的网站。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >2.
          脚本自动执行。脚本通常搜索浏览器和插件版本来查看是否可能存在漏洞。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >3. 此过程可能需要用户启用脚本或活动网站组件并忽略警告对话框。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >4. 发现版本存在漏洞后，将漏洞攻击代码传递给浏览器。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >5.
          如果漏洞攻击成功，在用户系统执行攻击者代码，除非有其他保护措施。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >6.
          某些情况下，传递漏洞攻击代码前，攻击者需在初始扫描后第二次访问网站。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >与利用面向公众的应用漏洞不同，此技术的重点是在用户访问网站时利用客户端端点上的软件。攻击者通常使用此技术访问内部网络上的系统，而不太可能是隔离区的外部系统。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >攻击者还可能入侵网站将用户导向恶意应用程序，从而盗取令牌以访问受保护的应用程序并获取信息。这些恶意应用程序是在合法网站上以窗口形式弹出给用户的。</span
        >
      </p>
      <h2 style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 18pt; font-weight: bold"
          >缓解措施建议</span
        >
      </h2>
      <table
        cellspacing="0"
        cellpadding="0"
        style="border-collapse: collapse; margin-left: 0pt"
      >
        <thead>
          <tr>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p style="margin: 0pt; orphans: 0; text-align: center; widows: 0">
                <span
                  style="
                    font-family: 宋体;
                    font-size: 10.5pt;
                    font-weight: bold;
                  "
                  >缓解措施</span
                >
              </p>
            </td>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p style="margin: 0pt; orphans: 0; text-align: center; widows: 0">
                <span
                  style="
                    font-family: 宋体;
                    font-size: 10.5pt;
                    font-weight: bold;
                  "
                  >描述</span
                >
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p style="margin: 0pt; orphans: 0; widows: 0">
                <span style="font-family: 宋体; font-size: 10.5pt"
                  >应用隔离和沙箱</span
                >
              </p>
            </td>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p
                style="margin: 0pt; orphans: 0; text-align: justify; widows: 0"
              >
                <span style="font-family: 宋体; font-size: 10.5pt"
                  >可用浏览器沙箱来缓解漏洞攻击的一些影响，但可能会有沙箱逃逸。也可通过其他类型的虚拟化和应用微分区来缓解客户端漏洞攻击的影响。对于这些类型的系统，在实施中仍然可能存在其它漏洞利用和缺陷等风险。</span
                >
              </p>
            </td>
          </tr>
          <tr>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p
                style="margin: 0pt; orphans: 0; text-align: justify; widows: 0"
              >
                <span style="font-family: 宋体; font-size: 10.5pt"
                  >漏洞利用防护</span
                >
              </p>
            </td>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p
                style="margin: 0pt; orphans: 0; text-align: justify; widows: 0"
              >
                <span style="font-family: 宋体; font-size: 10.5pt"
                  >可用安全应用，比如</span
                ><span style="font-family: Calibri; font-size: 10.5pt"
                  >WDEG</span
                ><span style="font-family: 宋体; font-size: 10.5pt">（</span
                ><span style="font-family: Calibri; font-size: 10.5pt"
                  >Windows Defender Exploit Guard</span
                ><span style="font-family: 宋体; font-size: 10.5pt">）和</span
                ><span style="font-family: Calibri; font-size: 10.5pt"
                  >EMET</span
                ><span style="font-family: 宋体; font-size: 10.5pt">（</span
                ><span style="font-family: Calibri; font-size: 10.5pt"
                  >Enhanced Mitigation Experience Toolkit</span
                ><span style="font-family: 宋体; font-size: 10.5pt"
                  >），来查找漏洞攻击行为，从而缓解某些漏洞攻击行为的影响。也可通过控制流完整性检查来识别和阻止软件攻击。许多保护措施依赖于体系结构和目标应用二进制文件</span
                ><span style="font-family: 宋体; font-size: 10.5pt"
                  >的兼容性。</span
                >
              </p>
            </td>
          </tr>
          <tr>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p
                style="margin: 0pt; orphans: 0; text-align: justify; widows: 0"
              >
                <span style="font-family: Calibri; font-size: 10.5pt">Web</span
                ><span style="font-family: 宋体; font-size: 10.5pt"
                  >内容限制</span
                >
              </p>
            </td>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p
                style="margin: 0pt; orphans: 0; text-align: justify; widows: 0"
              >
                <span style="font-family: 宋体; font-size: 10.5pt"
                  >可用广告拦截器来立即阻止执行广告中携带的恶意代码。也可通过脚本拦截扩展来阻止执行漏洞攻击过程中常用的</span
                ><span style="font-family: Calibri; font-size: 10.5pt"
                  >JavaScript</span
                ><span style="font-family: 宋体; font-size: 10.5pt">。</span>
              </p>
            </td>
          </tr>
          <tr>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p
                style="margin: 0pt; orphans: 0; text-align: justify; widows: 0"
              >
                <span style="font-family: 宋体; font-size: 10.5pt"
                  >软件更新</span
                >
              </p>
            </td>
            <td
              style="
                border-bottom-color: #dee2e6;
                border-bottom-style: solid;
                border-bottom-width: 0.75pt;
                border-left-color: #dee2e6;
                border-left-style: solid;
                border-left-width: 0.75pt;
                border-right-color: #dee2e6;
                border-right-style: solid;
                border-right-width: 0.75pt;
                border-top-color: #dee2e6;
                border-top-style: solid;
                border-top-width: 0.75pt;
                padding: 4.88pt;
                vertical-align: middle;
              "
            >
              <p
                style="margin: 0pt; orphans: 0; text-align: justify; widows: 0"
              >
                <span style="font-family: 宋体; font-size: 10.5pt"
                  >确保更新所有的浏览器和插件，防止漏洞利用。请使用启用了安全特性的最新浏览器。</span
                >
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 18pt; font-weight: bold"
          >检测建议</span
        >
      </h2>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >防火墙和代理可用来查看URL中是否携带已知的错误域或参数。也可用来对网站及所求资源做信誉分析，例如分析域名的使用年数，注册人，是否在已知错误列表中，以及之前有多少其他用户已连接到该域。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >网络入侵检测系统（有时带SSL/TLS
          MITM检查）可用来查找已知的恶意脚本（常被重用的脚本有侦察、堆喷射和浏览器识别脚本）、常见脚本混淆以及漏洞攻击代码。</span
        >
      </p>
      <p style="margin: 5pt 0pt">
        <span style="font-family: 微软雅黑; font-size: 10.5pt"
          >检测合法网站的路过式攻击可能是困难的。还要在端点系统上查找能表明攻陷成功的行为，例如浏览器进程的异常行为，包括写入磁盘的可疑文件，通过进程插入来试图掩盖执行的证据，发现的证据，以及表明有其它工具传输到系统的异常网络流量。</span
        >
      </p>
      <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
        <span style="font-family: Calibri; font-size: 10.5pt">&#xa0;</span>
      </p>
    </div>

        </el-card>
        <!-- <h3>{{item.name}}</h3> -->

  </div>  
</template>

<script>
export default {
data() {
    return {
      menulist:true,
      item: null,
      json: {
				'初始访问': ['初始访问值1', '初始访问值2', '初始访问值3'],
				'执行': ['执行1', '执行2', '执行3'],
				'执行1': ['执行1', '执行2', '执行3'],
				'执行2': ['执行1', '执行2', '执行3'],
				'执行3': ['执行1', '执行2', '执行3']
			},
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    async getMenuList() {
      var res = await this.$http.get("http://mb1314.ngrok2.xiaomiqiu.cn/repository/getFormInfo");
      if (res.status !== 200) return this.$message.error(res.msg);
      this.menulist = res.data;
      console.info(this.menulist);
    },
    gourl() {
      var itemID = this.$route.query.item.id;
      var item1ID = this.$route.query.item1.id;
      this.$http.get(this.$store.state.index.ip + "repository/" + itemID + item1ID)
        .then((response) => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.thead {
  background-color: skyblue;
}
.column-container {
  display: flex;
  width: 100%;
  text-align: center;
}
.column {
  flex: 1;
  font-size: 20px;
}
.column1 {
  flex: 1;
}
/deep/.el-menu-item {
  font-size: 15px;
  text-align: center;
}
.tac {
  width: 10px;
}
.card1 {
  background-color: skyblue;
}
.th {
  font-size: 14px;
}
</style>
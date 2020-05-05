import React, { Component } from 'react';
import PageHeaderWhite from '../../../components/common/PageHeaderWhite'

const aboutUsContent = ` <div data-v-006c162c="" class="about__content__tips">
<p style={"text-indent:2em;"}>
    <span style="font-size: 14px;>聚橙自2007年成立以来，以演出经纪为主营业务，深耕演出行业细分领域，同时做实全产业链的战略布局，现已在全国范围内近90个城市拥有演出主办能力，旗下聚橙剧院院线已拥有100家剧院运营权，是国内运营剧院数量最多的剧院院线。目前聚橙成为了演出行业独树一帜的领导者。
</span>
</p>
<p style=" text-indent:2em;"="">
<span style="font-size: 14px;">
        聚橙独创F-3C全产业链布局经营模式，形成了亲子文化娱乐、独立音乐厂牌、演唱会品牌、国际级音乐剧、舞台艺术平台、旅游演艺、演出周边衍生品、剧院管理、票务销售平台、文创基金10个子品牌与母公司“战车并行”的业务格局。10个子品牌秉承母公司追求卓越的企业文化，分别深耕各自的演出行业细分领域，做实全产业链的战略布局。
</span>
</span></p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    在内容制作方面，聚橙投资制作和引进了涵盖亲子娱乐文化、网络综艺、艺术展览、音乐剧、戏曲、戏剧、舞蹈、古典音乐、小流行音乐、流行演唱会、旅游演艺等全品类覆盖精品内容，全面开花，满足不同人群的艺术文化需求。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    在渠道方面，聚橙在全国范围近90个城市具有演出主办能力，人才的培养与剧院铺排，使聚橙具有专业的演出运营能力和强大的执行力。演出旺季时，同一天在全国范围内，聚橙主办的演出多达46场，是同行业难于企及的实力展现。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    在客户服务方面，聚橙建立了自有票务系统和全国剧院铺排网络，通过强大的全产业链资源整合能力，实现多场次、多城市的巡演落地，迅速降低演出成本，维持低票价策略，降低观演门槛，让更多人能够走进剧院，亲近艺术；同时，通过演出周边衍生品的开发及销售服务，延续演出现场的鲜活热度，增强文化渗透力。
</span>
</p>
<p>
<span style="font-size: 14px;">
    在文化创投方面，聚橙旗下投融资部专注于投资文化演艺产业链，为中国的演出市场繁荣和可持续发展提供助力。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙旗下亲子文化娱乐品牌--小橙堡 Little Orange Castle
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    深圳市小橙堡文化传播有限公司是聚橙旗下家庭亲子演出的集合，下设小橙堡儿童艺术剧团和小橙堡青少年管弦乐团，以“最好的爱是陪伴”为品牌理念。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    小橙堡专注于亲子文化娱乐内容出品和全国标准化运营。目前有三大产品线，亲子演出、亲子艺术展以及亲子文化视频节目。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    其中，亲子演出版块，在全国30个以上的城市运营周末儿童剧场和亲子微剧场。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    小橙堡目前已拥有50多个独有版权的演出剧目及数十个海外引进项目，并在全国30个省市自治区超过120个城市完成巡回演出超过1万场，接待观众数千万。连续三年获得道略演艺排行榜中国亲子演出市场份额第一名。成立5年，小橙堡已经成为国内亲子演出行业新一代的领跑者。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙旗下独立音乐厂牌--万有音乐系WantU Music
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    万有音乐系专注打造中小型音乐文化内容，满足移动互联网时代中国青年观众多元化的音乐现场需求，充满正能量与新鲜元素，用音乐理解每一位鲜活的观众，营造独一无二的音乐气场。万有音乐系拥有强大的音乐内容制作和演出主办能力，成熟的巡演机制，专业的营销宣传团队，经验丰富的落地执行能力，正式领跑中小型音乐文化行业。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    2017年，已达到76组艺人，600场演出计划，成为海内外流行艺人在中国演出市场上的首选合作伙伴。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙旗下演唱会品牌--聚橙大流行ACO POP
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙旗下大流行板块，专注于大型室内外流行音乐演唱会领域，演出内容涉及内地、港澳台乃至日韩、欧美等知名歌手及音乐人现场演出，为国内外乐迷提供轻松愉悦的线上及线下娱乐活动。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙大流行拥有丰富的国内外演出资源，优质大型场馆资源，专业的策划营销和运营团队，以及超强的落地执行能力，并在业界拥有良好口碑。未来，聚橙大流行将继续积极探索更适合互联网时代的运作方式，建立中国乃至全球大型音乐产业链，业务板块有望延伸至二次元大型音乐现场、大型演奏会现场等领域，为观众提供更多元、更健康、更专业、更快乐的文化娱乐体验。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">

    聚橙旗下舞台艺术品牌--嬉习喜戏 C C ORANGE
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    嬉习喜戏，聚橙旗下专注运营舞台表演艺术的平台。全年策划、举办城市戏剧节、嬉习喜戏艺术节、新浪潮戏曲节；为当下的观众提供“有才、有料、有趣、有名”的文艺演出。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    目前，嬉习喜戏主办的演出足迹遍布全国52个城市，成熟的巡演机制、专业的营销能力、经验丰富的执行团队，形成一条在国内演出行业极具竞争力的产品线。旗下的“百千计划”，专注于年轻艺术家的创作扶持，为100位才华横溢的艺术家及表演团体提供全年超过1000场的巡演计划，是互联网时代最大胆、最具潜力的演出经纪平台。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    嬉习喜戏，用最好的戏，打造你最in的生活方式！

</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙旗下国际音乐剧品牌--聚橙音乐剧 ACO MUSCIAL
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙音乐剧隶属于中国最大的民营演出机构——聚橙，聚橙音乐剧致力于投资制作音乐剧、舞台剧，引入国外优质剧目，国内优质演艺资源输出等。自2015年开始，聚橙音乐剧共投资了19个百老汇音乐剧项目，并获得了托尼奖5项大奖和17项提名。2018年聚橙音乐剧投资音乐剧《乐队来访》成为今年托尼奖最大赢家，一举摘得“最佳音乐剧”桂冠。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    2017年，聚橙音乐剧引进了百老汇殿堂级音乐剧《魔法坏女巫》，在北上广三地献上了85场的“魔法奇迹”！2018年，聚橙音乐剧将为中国观众带来更加精彩绝伦的音乐剧盛宴。世界经典原版音乐剧《猫》、百老汇摇滚音乐剧《吉屋出租》以及法语原版经典音乐剧《罗密欧与朱丽叶》都在中国巡演。聚橙音乐剧制作的精品小剧场音乐剧《长腿叔叔》《I DO！ I DO！》《深夜食堂》于2018年与观众见面。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">

    聚橙旗下旅游演艺品牌--风景天橙 A&amp;T Orange
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    风景天橙不仅可以为旅游演出进行创意设计，还提供演出制作及后期运营管理的一站式解决方案；除了传统的旅游演艺形式，还提供更多种的国际化新型旅游项目规划。风景天橙走国际化的旅游演艺道路，拥有美国、英国、荷兰、台湾等国际化制作团队，短短两年时间国内业务扩展到了华东区、华南区、西南区，国外业务扩展到了印尼以及美国。风景天橙提供一站式数字旅游演艺场景化体验，已成为高端国际时尚盛宴首选。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">

    聚橙旗下剧院运营品牌--聚橙剧院院线Orange Theaters
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙剧院院线致力于打造以剧院为核心，兼容演出基地、文创商业、体验空间等业态的“泛剧院”模式文化综合体生态链，并已初步形成独有文化品牌与稳定的商业体系。聚橙剧院院线现已签约100家，旗下剧院遍布遍布北京、广州、深圳、苏州、重庆、天津、宁波、无锡、常州、新加坡等城市与国家。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">

    聚橙旗下票务销售平台--聚橙票务ACO Ticketing
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙票务承载聚橙产业链中C端品牌和业务，面向文化演艺行业，以票务营销为核心，致力于解决用户的娱乐消费需求，为客户提供优质、高效、快捷的系统解决方案、票品资讯及服务，协助合作伙伴提升市场运作、票房营销能力，实现多赢。目前聚橙票务已经覆盖中国内地100多个城市及港澳和韩国。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">

    聚橙旗下电子商务品牌 聚橙网 JUOOO
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙网作为国内票务行业的领军品牌，致力于为观众提供各种演唱会、流行音乐会、古典音乐、舞台剧、儿童剧演出官方在线购票服务。聚橙网兼顾在线销售和传统渠道分销，在演出项目合作、演出信息发布、线上线下销售、品牌营销等诸多方面，为各方提供综合票务解决方案。

</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙分享家：分享海量优质演出，邀请产生新用户注册即获得现金奖励，一键提现微信钱包，返现享不停，聚橙分享家，分享精彩演出的行家。文化青年，品质生活，聚在聚橙网！
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">

    聚橙旗下演出周边衍生品品牌--优橙品 U. Plus Orange
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    优橙品以演出周边衍生品的开发及销售为核心，针对流行演唱会、戏曲、戏剧、舞蹈、儿童剧等不同品类演出，开发多元的、创新的衍生品，开拓电子商务、演出现场（体育场、剧院、展馆等）多重渠道，延续演出现场的鲜活热度，增强文化渗透力。
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">

    聚橙旗下文创基金 ACO INVESTMENT FUNDS
</span>
</p>
<p style="text-indent:2em;">
<span style="font-size: 14px;">
    聚橙旗下投融资部专注于投资文化演艺产业链，重点投资与聚橙有产业集群和产业互动效果的企业，包括小型制作公司、国内外演出项目、演出场馆经营和票务公司等。其中，聚航泽森基金是由聚橙、招商启航和泽森资本联合发起设立的文化产业投资基金。
</span>
</p></div>`

class AboutUs extends Component {


    componentDidMount() {
        let aboutUsContainer = document.getElementsByClassName('aboutUsContainer')[0]
        aboutUsContainer.innerHTML = aboutUsContent;
    }
    render() {
        return (
            <div>
                <PageHeaderWhite pageName={'关于我们'}></PageHeaderWhite>
                <div>
                    <img
                        src={require('../../../assets/img/logo_us.png')}
                        style={{ margin: 'auto', width: '70px', marginTop: '30px' }} />
                </div>
                <p style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#232323',
                    lineHeight: '22px',
                    marginTop: '5px'
                }}>聚橙票务</p>
                <p style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#999999',
                    lineHeight: '22px',
                    margin: '5px 0 30px'
                }}>V6.1.1</p>
                <div className={'aboutUsContainer'} style={{ background: '#fff', padding: '20px' }}>

                </div>
            </div >
        );
    }
}

export default AboutUs;
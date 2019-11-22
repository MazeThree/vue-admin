(function(t, e) {
    'object' === typeof exports && 'undefined' !== typeof module ? e(exports) : 'function' === typeof define && define.amd ? define(['exports'], e) : e(t.mapv = t.mapv || {})
})(this, function(t) {
    'use strict'
    var e = function(t) {
        t && t.clearRect && t.clearRect(0, 0, t.canvas.width, t.canvas.height)
    }
    function n() {
        this._subscribers = {}
    }
    n.prototype.on = function(t, e) {
        var n = this._subscribers[t]
        n || (n = [], this._subscribers[t] = n), n.push({ callback: e })
    }, n.prototype.off = function (t, e) {
        var n = this._subscribers[t]
        if (n) for (var i = 0; i < n.length; i++) n[i].callback === e && (n.splice(i, 1), i--)
    }, n.prototype._trigger = function (t, e, n) {
        if ('*' === t) throw new Error('Cannot trigger event *')
        var i = []
        t in this._subscribers && (i = i.concat(this._subscribers[t])), '*' in this._subscribers && (i = i.concat(this._subscribers['*']))
        for (var o = 0, a = i.length; o < a; o++) {
            var r = i[o]
            r.callback && r.callback(t, e, n || null)
        }
    }
    var i = {
        municipalities: [{ n: '北京', g: '116.395645,39.929986|12' }, {
            n: '上海',
            g: '121.487899,31.249162|12'
        }, { n: '天津', g: '117.210813,39.14393|12' }, { n: '重庆', g: '106.530635,29.544606|12' }],
        provinces: [{
            n: '安徽',
            g: '117.216005,31.859252|8',
            cities: [{ n: '合肥', g: '117.282699,31.866942|12' }, { n: '安庆', g: '117.058739,30.537898|13' }, {
                n: '蚌埠',
                g: '117.35708,32.929499|13'
            }, { n: '亳州', g: '115.787928,33.871211|13' }, { n: '巢湖', g: '117.88049,31.608733|13' }, {
                n: '池州',
                g: '117.494477,30.660019|14'
            }, { n: '滁州', g: '118.32457,32.317351|13' }, { n: '阜阳', g: '115.820932,32.901211|13' }, {
                n: '淮北',
                g: '116.791447,33.960023|13'
            }, { n: '淮南', g: '117.018639,32.642812|13' }, { n: '黄山', g: '118.29357,29.734435|13' }, {
                n: '六安',
                g: '116.505253,31.755558|13'
            }, { n: '马鞍山', g: '118.515882,31.688528|13' }, { n: '宿州', g: '116.988692,33.636772|13' }, {
                n: '铜陵',
                g: '117.819429,30.94093|14'
            }, { n: '芜湖', g: '118.384108,31.36602|12' }, { n: '宣城', g: '118.752096,30.951642|13' }]
        }, {
            n: '福建',
            g: '117.984943,26.050118|8',
            cities: [{ n: '福州', g: '119.330221,26.047125|12' }, { n: '龙岩', g: '117.017997,25.078685|13' }, {
                n: '南平',
                g: '118.181883,26.643626|13'
            }, { n: '宁德', g: '119.542082,26.656527|14' }, { n: '莆田', g: '119.077731,25.44845|13' }, {
                n: '泉州',
                g: '118.600362,24.901652|12'
            }, { n: '三明', g: '117.642194,26.270835|14' }, { n: '厦门', g: '118.103886,24.489231|12' }, {
                n: '漳州',
                g: '117.676205,24.517065|12'
            }]
        }, {
            n: '甘肃',
            g: '102.457625,38.103267|6',
            cities: [{ n: '兰州', g: '103.823305,36.064226|12' }, { n: '白银', g: '104.171241,36.546682|13' }, {
                n: '定西',
                g: '104.626638,35.586056|13'
            }, { n: '甘南州', g: '102.917442,34.992211|14' }, { n: '嘉峪关', g: '98.281635,39.802397|13' }, {
                n: '金昌',
                g: '102.208126,38.516072|13'
            }, { n: '酒泉', g: '98.508415,39.741474|13' }, { n: '临夏州', g: '103.215249,35.598514|13' }, {
                n: '陇南',
                g: '104.934573,33.39448|14'
            }, { n: '平凉', g: '106.688911,35.55011|13' }, { n: '庆阳', g: '107.644227,35.726801|13' }, {
                n: '天水',
                g: '105.736932,34.584319|13'
            }, { n: '武威', g: '102.640147,37.933172|13' }, { n: '张掖', g: '100.459892,38.93932|13' }]
        }, {
            n: '广东',
            g: '113.394818,23.408004|8',
            cities: [{ n: '广州', g: '113.30765,23.120049|12' }, { n: '潮州', g: '116.630076,23.661812|13' }, {
                n: '东莞',
                g: '113.763434,23.043024|12'
            }, { n: '佛山', g: '113.134026,23.035095|13' }, { n: '河源', g: '114.713721,23.757251|12' }, {
                n: '惠州',
                g: '114.410658,23.11354|12'
            }, { n: '江门', g: '113.078125,22.575117|13' }, { n: '揭阳', g: '116.379501,23.547999|13' }, {
                n: '茂名',
                g: '110.931245,21.668226|13'
            }, { n: '梅州', g: '116.126403,24.304571|13' }, { n: '清远', g: '113.040773,23.698469|13' }, {
                n: '汕头',
                g: '116.72865,23.383908|13'
            }, { n: '汕尾', g: '115.372924,22.778731|14' }, { n: '韶关', g: '113.594461,24.80296|13' }, {
                n: '深圳',
                g: '114.025974,22.546054|12'
            }, { n: '阳江', g: '111.97701,21.871517|14' }, { n: '云浮', g: '112.050946,22.937976|13' }, {
                n: '湛江',
                g: '110.365067,21.257463|13'
            }, { n: '肇庆', g: '112.479653,23.078663|13' }, { n: '中山', g: '113.42206,22.545178|12' }, {
                n: '珠海',
                g: '113.562447,22.256915|13'
            }]
        }, {
            n: '广西',
            g: '108.924274,23.552255|7',
            cities: [{ n: '南宁', g: '108.297234,22.806493|12' }, { n: '百色', g: '106.631821,23.901512|13' }, {
                n: '北海',
                g: '109.122628,21.472718|13'
            }, { n: '崇左', g: '107.357322,22.415455|14' }, { n: '防城港', g: '108.351791,21.617398|15' }, {
                n: '桂林',
                g: '110.26092,25.262901|12'
            }, { n: '贵港', g: '109.613708,23.103373|13' }, { n: '河池', g: '108.069948,24.699521|14' }, {
                n: '贺州',
                g: '111.552594,24.411054|14'
            }, { n: '来宾', g: '109.231817,23.741166|14' }, { n: '柳州', g: '109.422402,24.329053|12' }, {
                n: '钦州',
                g: '108.638798,21.97335|13'
            }, { n: '梧州', g: '111.305472,23.485395|13' }, { n: '玉林', g: '110.151676,22.643974|14' }]
        }, {
            n: '贵州',
            g: '106.734996,26.902826|8',
            cities: [{ n: '贵阳', g: '106.709177,26.629907|12' }, { n: '安顺', g: '105.92827,26.228595|13' }, {
                n: '毕节地区',
                g: '105.300492,27.302612|14'
            }, { n: '六盘水', g: '104.852087,26.591866|13' }, { n: '铜仁地区', g: '109.196161,27.726271|14' }, {
                n: '遵义',
                g: '106.93126,27.699961|13'
            }, { n: '黔西南州', g: '104.900558,25.095148|11' }, { n: '黔东南州', g: '107.985353,26.583992|11' }, {
                n: '黔南州',
                g: '107.523205,26.264536|11'
            }]
        }, {
            n: '海南',
            g: '109.733755,19.180501|9',
            cities: [{ n: '海口', g: '110.330802,20.022071|13' }, { n: '白沙', g: '109.358586,19.216056|12' }, {
                n: '保亭',
                g: '109.656113,18.597592|12'
            }, { n: '昌江', g: '109.0113,19.222483|12' }, { n: '儋州', g: '109.413973,19.571153|13' }, {
                n: '澄迈',
                g: '109.996736,19.693135|13'
            }, { n: '东方', g: '108.85101,18.998161|13' }, { n: '定安', g: '110.32009,19.490991|13' }, {
                n: '琼海',
                g: '110.414359,19.21483|13'
            }, { n: '琼中', g: '109.861849,19.039771|12' }, { n: '乐东', g: '109.062698,18.658614|12' }, {
                n: '临高',
                g: '109.724101,19.805922|13'
            }, { n: '陵水', g: '109.948661,18.575985|12' }, { n: '三亚', g: '109.522771,18.257776|12' }, {
                n: '屯昌',
                g: '110.063364,19.347749|13'
            }, { n: '万宁', g: '110.292505,18.839886|13' }, { n: '文昌', g: '110.780909,19.750947|13' }, {
                n: '五指山',
                g: '109.51775,18.831306|13'
            }]
        }, {
            n: '河北',
            g: '115.661434,38.61384|7',
            cities: [{ n: '石家庄', g: '114.522082,38.048958|12' }, { n: '保定', g: '115.49481,38.886565|13' }, {
                n: '沧州',
                g: '116.863806,38.297615|13'
            }, { n: '承德', g: '117.933822,40.992521|14' }, { n: '邯郸', g: '114.482694,36.609308|13' }, {
                n: '衡水',
                g: '115.686229,37.746929|13'
            }, { n: '廊坊', g: '116.703602,39.518611|13' }, { n: '秦皇岛', g: '119.604368,39.945462|12' }, {
                n: '唐山',
                g: '118.183451,39.650531|13'
            }, { n: '邢台', g: '114.520487,37.069531|13' }, { n: '张家口', g: '114.893782,40.811188|13' }]
        }, {
            n: '河南',
            g: '113.486804,34.157184|7',
            cities: [{ n: '郑州', g: '113.649644,34.75661|12' }, { n: '安阳', g: '114.351807,36.110267|12' }, {
                n: '鹤壁',
                g: '114.29777,35.755426|13'
            }, { n: '焦作', g: '113.211836,35.234608|13' }, { n: '开封', g: '114.351642,34.801854|13' }, {
                n: '洛阳',
                g: '112.447525,34.657368|12'
            }, { n: '漯河', g: '114.046061,33.576279|13' }, { n: '南阳', g: '112.542842,33.01142|13' }, {
                n: '平顶山',
                g: '113.300849,33.745301|13'
            }, { n: '濮阳', g: '115.026627,35.753298|12' }, { n: '三门峡', g: '111.181262,34.78332|13' }, {
                n: '商丘',
                g: '115.641886,34.438589|13'
            }, { n: '新乡', g: '113.91269,35.307258|13' }, { n: '信阳', g: '114.085491,32.128582|13' }, {
                n: '许昌',
                g: '113.835312,34.02674|13'
            }, { n: '周口', g: '114.654102,33.623741|13' }, { n: '驻马店', g: '114.049154,32.983158|13' }]
        }, {
            n: '黑龙江',
            g: '128.047414,47.356592|6',
            cities: [{ n: '哈尔滨', g: '126.657717,45.773225|12' }, { n: '大庆', g: '125.02184,46.596709|12' }, {
                n: '大兴安岭地区',
                g: '124.196104,51.991789|10'
            }, { n: '鹤岗', g: '130.292472,47.338666|13' }, { n: '黑河', g: '127.50083,50.25069|14' }, {
                n: '鸡西',
                g: '130.941767,45.32154|13'
            }, { n: '佳木斯', g: '130.284735,46.81378|12' }, { n: '牡丹江', g: '129.608035,44.588521|13' }, {
                n: '七台河',
                g: '131.019048,45.775005|14'
            }, { n: '齐齐哈尔', g: '123.987289,47.3477|13' }, { n: '双鸭山', g: '131.171402,46.655102|13' }, {
                n: '绥化',
                g: '126.989095,46.646064|13'
            }, { n: '伊春', g: '128.910766,47.734685|14' }]
        }, {
            n: '湖北',
            g: '112.410562,31.209316|8',
            cities: [{ n: '武汉', g: '114.3162,30.581084|12' }, { n: '鄂州', g: '114.895594,30.384439|14' }, {
                n: '恩施',
                g: '109.517433,30.308978|14'
            }, { n: '黄冈', g: '114.906618,30.446109|14' }, { n: '黄石', g: '115.050683,30.216127|13' }, {
                n: '荆门',
                g: '112.21733,31.042611|13'
            }, { n: '荆州', g: '112.241866,30.332591|12' }, { n: '潜江', g: '112.768768,30.343116|13' }, {
                n: '神农架林区',
                g: '110.487231,31.595768|13'
            }, { n: '十堰', g: '110.801229,32.636994|13' }, { n: '随州', g: '113.379358,31.717858|13' }, {
                n: '天门',
                g: '113.12623,30.649047|13'
            }, { n: '仙桃', g: '113.387448,30.293966|13' }, { n: '咸宁', g: '114.300061,29.880657|13' }, {
                n: '襄阳',
                g: '112.176326,32.094934|12'
            }, { n: '孝感', g: '113.935734,30.927955|13' }, { n: '宜昌', g: '111.310981,30.732758|13' }]
        }, {
            n: '湖南',
            g: '111.720664,27.695864|7',
            cities: [{ n: '长沙', g: '112.979353,28.213478|12' }, { n: '常德', g: '111.653718,29.012149|12' }, {
                n: '郴州',
                g: '113.037704,25.782264|13'
            }, { n: '衡阳', g: '112.583819,26.898164|13' }, { n: '怀化', g: '109.986959,27.557483|13' }, {
                n: '娄底',
                g: '111.996396,27.741073|13'
            }, { n: '邵阳', g: '111.461525,27.236811|13' }, { n: '湘潭', g: '112.935556,27.835095|13' }, {
                n: '湘西州',
                g: '109.745746,28.317951|14'
            }, { n: '益阳', g: '112.366547,28.588088|13' }, { n: '永州', g: '111.614648,26.435972|13' }, {
                n: '岳阳',
                g: '113.146196,29.378007|13'
            }, { n: '张家界', g: '110.48162,29.124889|13' }, { n: '株洲', g: '113.131695,27.827433|13' }]
        }, {
            n: '江苏',
            g: '119.368489,33.013797|8',
            cities: [{ n: '南京', g: '118.778074,32.057236|12' }, { n: '常州', g: '119.981861,31.771397|12' }, {
                n: '淮安',
                g: '119.030186,33.606513|12'
            }, { n: '连云港', g: '119.173872,34.601549|12' }, { n: '南通', g: '120.873801,32.014665|12' }, {
                n: '苏州',
                g: '120.619907,31.317987|12'
            }, { n: '宿迁', g: '118.296893,33.95205|13' }, { n: '泰州', g: '119.919606,32.476053|13' }, {
                n: '无锡',
                g: '120.305456,31.570037|12'
            }, { n: '徐州', g: '117.188107,34.271553|12' }, { n: '盐城', g: '120.148872,33.379862|12' }, {
                n: '扬州',
                g: '119.427778,32.408505|13'
            }, { n: '镇江', g: '119.455835,32.204409|13' }]
        }, {
            n: '江西',
            g: '115.676082,27.757258|7',
            cities: [{ n: '南昌', g: '115.893528,28.689578|12' }, { n: '抚州', g: '116.360919,27.954545|13' }, {
                n: '赣州',
                g: '114.935909,25.845296|13'
            }, { n: '吉安', g: '114.992039,27.113848|13' }, { n: '景德镇', g: '117.186523,29.303563|12' }, {
                n: '九江',
                g: '115.999848,29.71964|13'
            }, { n: '萍乡', g: '113.859917,27.639544|13' }, { n: '上饶', g: '117.955464,28.457623|13' }, {
                n: '新余',
                g: '114.947117,27.822322|13'
            }, { n: '宜春', g: '114.400039,27.81113|13' }, { n: '鹰潭', g: '117.03545,28.24131|13' }]
        }, {
            n: '吉林',
            g: '126.262876,43.678846|7',
            cities: [{ n: '长春', g: '125.313642,43.898338|12' }, { n: '白城', g: '122.840777,45.621086|13' }, {
                n: '白山',
                g: '126.435798,41.945859|13'
            }, { n: '吉林', g: '126.564544,43.871988|12' }, { n: '辽源', g: '125.133686,42.923303|13' }, {
                n: '四平',
                g: '124.391382,43.175525|12'
            }, { n: '松原', g: '124.832995,45.136049|13' }, { n: '通化', g: '125.94265,41.736397|13' }, {
                n: '延边',
                g: '129.485902,42.896414|13'
            }]
        }, {
            n: '辽宁',
            g: '122.753592,41.6216|8',
            cities: [{ n: '沈阳', g: '123.432791,41.808645|12' }, { n: '鞍山', g: '123.007763,41.118744|13' }, {
                n: '本溪',
                g: '123.778062,41.325838|12'
            }, { n: '朝阳', g: '120.446163,41.571828|13' }, { n: '大连', g: '121.593478,38.94871|12' }, {
                n: '丹东',
                g: '124.338543,40.129023|12'
            }, { n: '抚顺', g: '123.92982,41.877304|12' }, { n: '阜新', g: '121.660822,42.01925|14' }, {
                n: '葫芦岛',
                g: '120.860758,40.74303|13'
            }, { n: '锦州', g: '121.147749,41.130879|13' }, { n: '辽阳', g: '123.172451,41.273339|14' }, {
                n: '盘锦',
                g: '122.073228,41.141248|13'
            }, { n: '铁岭', g: '123.85485,42.299757|13' }, { n: '营口', g: '122.233391,40.668651|13' }]
        }, {
            n: '内蒙古',
            g: '114.415868,43.468238|5',
            cities: [{ n: '呼和浩特', g: '111.660351,40.828319|12' }, { n: '阿拉善盟', g: '105.695683,38.843075|14' }, {
                n: '包头',
                g: '109.846239,40.647119|12'
            }, { n: '巴彦淖尔', g: '107.423807,40.76918|12' }, { n: '赤峰', g: '118.930761,42.297112|12' }, {
                n: '鄂尔多斯',
                g: '109.993706,39.81649|12'
            }, { n: '呼伦贝尔', g: '119.760822,49.201636|12' }, { n: '通辽', g: '122.260363,43.633756|12' }, {
                n: '乌海',
                g: '106.831999,39.683177|13'
            }, { n: '乌兰察布', g: '113.112846,41.022363|12' }, { n: '锡林郭勒盟', g: '116.02734,43.939705|11' }, {
                n: '兴安盟',
                g: '122.048167,46.083757|11'
            }]
        }, {
            n: '宁夏',
            g: '106.155481,37.321323|8',
            cities: [{ n: '银川', g: '106.206479,38.502621|12' }, { n: '固原', g: '106.285268,36.021523|13' }, {
                n: '石嘴山',
                g: '106.379337,39.020223|13'
            }, { n: '吴忠', g: '106.208254,37.993561|14' }, { n: '中卫', g: '105.196754,37.521124|14' }]
        }, {
            n: '青海',
            g: '96.202544,35.499761|7',
            cities: [{ n: '西宁', g: '101.767921,36.640739|12' }, { n: '果洛州', g: '100.223723,34.480485|11' }, {
                n: '海东地区',
                g: '102.085207,36.51761|11'
            }, { n: '海北州', g: '100.879802,36.960654|11' }, { n: '海南州', g: '100.624066,36.284364|11' }, {
                n: '海西州',
                g: '97.342625,37.373799|11'
            }, { n: '黄南州', g: '102.0076,35.522852|11' }, { n: '玉树州', g: '97.013316,33.00624|14' }]
        }, {
            n: '山东',
            g: '118.527663,36.09929|8',
            cities: [{ n: '济南', g: '117.024967,36.682785|12' }, { n: '滨州', g: '117.968292,37.405314|12' }, {
                n: '东营',
                g: '118.583926,37.487121|12'
            }, { n: '德州', g: '116.328161,37.460826|12' }, { n: '菏泽', g: '115.46336,35.26244|13' }, {
                n: '济宁',
                g: '116.600798,35.402122|13'
            }, { n: '莱芜', g: '117.684667,36.233654|13' }, { n: '聊城', g: '115.986869,36.455829|12' }, {
                n: '临沂',
                g: '118.340768,35.072409|12'
            }, { n: '青岛', g: '120.384428,36.105215|12' }, { n: '日照', g: '119.50718,35.420225|12' }, {
                n: '泰安',
                g: '117.089415,36.188078|13'
            }, { n: '威海', g: '122.093958,37.528787|13' }, { n: '潍坊', g: '119.142634,36.716115|12' }, {
                n: '烟台',
                g: '121.309555,37.536562|12'
            }, { n: '枣庄', g: '117.279305,34.807883|13' }, { n: '淄博', g: '118.059134,36.804685|12' }]
        }, {
            n: '山西',
            g: '112.515496,37.866566|7',
            cities: [{ n: '太原', g: '112.550864,37.890277|12' }, { n: '长治', g: '113.120292,36.201664|12' }, {
                n: '大同',
                g: '113.290509,40.113744|12'
            }, { n: '晋城', g: '112.867333,35.499834|13' }, { n: '晋中', g: '112.738514,37.693362|13' }, {
                n: '临汾',
                g: '111.538788,36.099745|13'
            }, { n: '吕梁', g: '111.143157,37.527316|14' }, { n: '朔州', g: '112.479928,39.337672|13' }, {
                n: '忻州',
                g: '112.727939,38.461031|12'
            }, { n: '阳泉', g: '113.569238,37.869529|13' }, { n: '运城', g: '111.006854,35.038859|13' }]
        }, {
            n: '陕西',
            g: '109.503789,35.860026|7',
            cities: [{ n: '西安', g: '108.953098,34.2778|12' }, { n: '安康', g: '109.038045,32.70437|13' }, {
                n: '宝鸡',
                g: '107.170645,34.364081|12'
            }, { n: '汉中', g: '107.045478,33.081569|13' }, { n: '商洛', g: '109.934208,33.873907|13' }, {
                n: '铜川',
                g: '108.968067,34.908368|13'
            }, { n: '渭南', g: '109.483933,34.502358|13' }, { n: '咸阳', g: '108.707509,34.345373|13' }, {
                n: '延安',
                g: '109.50051,36.60332|13'
            }, { n: '榆林', g: '109.745926,38.279439|12' }]
        }, {
            n: '四川',
            g: '102.89916,30.367481|7',
            cities: [{ n: '成都', g: '104.067923,30.679943|12' }, { n: '阿坝州', g: '102.228565,31.905763|15' }, {
                n: '巴中',
                g: '106.757916,31.869189|14'
            }, { n: '达州', g: '107.494973,31.214199|14' }, { n: '德阳', g: '104.402398,31.13114|13' }, {
                n: '甘孜州',
                g: '101.969232,30.055144|15'
            }, { n: '广安', g: '106.63572,30.463984|13' }, { n: '广元', g: '105.819687,32.44104|13' }, {
                n: '乐山',
                g: '103.760824,29.600958|13'
            }, { n: '凉山州', g: '102.259591,27.892393|14' }, { n: '泸州', g: '105.44397,28.89593|14' }, {
                n: '南充',
                g: '106.105554,30.800965|13'
            }, { n: '眉山', g: '103.84143,30.061115|13' }, { n: '绵阳', g: '104.705519,31.504701|12' }, {
                n: '内江',
                g: '105.073056,29.599462|13'
            }, { n: '攀枝花', g: '101.722423,26.587571|14' }, { n: '遂宁', g: '105.564888,30.557491|12' }, {
                n: '雅安',
                g: '103.009356,29.999716|13'
            }, { n: '宜宾', g: '104.633019,28.769675|13' }, { n: '资阳', g: '104.63593,30.132191|13' }, {
                n: '自贡',
                g: '104.776071,29.359157|13'
            }]
        }, {
            n: '西藏',
            g: '89.137982,31.367315|6',
            cities: [{ n: '拉萨', g: '91.111891,29.662557|13' }, { n: '阿里地区', g: '81.107669,30.404557|11' }, {
                n: '昌都地区',
                g: '97.185582,31.140576|15'
            }, { n: '林芝地区', g: '94.349985,29.666941|11' }, { n: '那曲地区', g: '92.067018,31.48068|14' }, {
                n: '日喀则地区',
                g: '88.891486,29.269023|14'
            }, { n: '山南地区', g: '91.750644,29.229027|11' }]
        }, {
            n: '新疆',
            g: '85.614899,42.127001|6',
            cities: [{ n: '乌鲁木齐', g: '87.564988,43.84038|12' }, { n: '阿拉尔', g: '81.291737,40.61568|13' }, {
                n: '阿克苏地区',
                g: '80.269846,41.171731|12'
            }, { n: '阿勒泰地区', g: '88.137915,47.839744|13' }, { n: '巴音郭楞', g: '86.121688,41.771362|12' }, {
                n: '博尔塔拉州',
                g: '82.052436,44.913651|11'
            }, { n: '昌吉州', g: '87.296038,44.007058|13' }, { n: '哈密地区', g: '93.528355,42.858596|13' }, {
                n: '和田地区',
                g: '79.930239,37.116774|13'
            }, { n: '喀什地区', g: '75.992973,39.470627|12' }, { n: '克拉玛依', g: '84.88118,45.594331|13' }, {
                n: '克孜勒苏州',
                g: '76.137564,39.750346|11'
            }, { n: '石河子', g: '86.041865,44.308259|13' }, { n: '塔城地区', g: '82.974881,46.758684|12' }, {
                n: '图木舒克',
                g: '79.198155,39.889223|13'
            }, { n: '吐鲁番地区', g: '89.181595,42.96047|13' }, { n: '五家渠', g: '87.565449,44.368899|13' }, {
                n: '伊犁州',
                g: '81.297854,43.922248|11'
            }]
        }, {
            n: '云南',
            g: '101.592952,24.864213|7',
            cities: [{ n: '昆明', g: '102.714601,25.049153|12' }, { n: '保山', g: '99.177996,25.120489|13' }, {
                n: '楚雄州',
                g: '101.529382,25.066356|13'
            }, { n: '大理州', g: '100.223675,25.5969|14' }, { n: '德宏州', g: '98.589434,24.44124|14' }, {
                n: '迪庆州',
                g: '99.713682,27.831029|14'
            }, { n: '红河州', g: '103.384065,23.367718|11' }, { n: '丽江', g: '100.229628,26.875351|13' }, {
                n: '临沧',
                g: '100.092613,23.887806|14'
            }, { n: '怒江州', g: '98.859932,25.860677|14' }, { n: '普洱', g: '100.980058,22.788778|14' }, {
                n: '曲靖',
                g: '103.782539,25.520758|12'
            }, { n: '昭通', g: '103.725021,27.340633|13' }, { n: '文山', g: '104.089112,23.401781|14' }, {
                n: '西双版纳',
                g: '100.803038,22.009433|13'
            }, { n: '玉溪', g: '102.545068,24.370447|13' }]
        }, {
            n: '浙江',
            g: '119.957202,29.159494|8',
            cities: [{ n: '杭州', g: '120.219375,30.259244|12' }, { n: '湖州', g: '120.137243,30.877925|12' }, {
                n: '嘉兴',
                g: '120.760428,30.773992|13'
            }, { n: '金华', g: '119.652576,29.102899|12' }, { n: '丽水', g: '119.929576,28.4563|13' }, {
                n: '宁波',
                g: '121.579006,29.885259|12'
            }, { n: '衢州', g: '118.875842,28.95691|12' }, { n: '绍兴', g: '120.592467,30.002365|13' }, {
                n: '台州',
                g: '121.440613,28.668283|13'
            }, { n: '温州', g: '120.690635,28.002838|12' }, { n: '舟山', g: '122.169872,30.03601|13' }]
        }],
        other: [{ n: '香港', g: '114.186124,22.293586|11' }, { n: '澳门', g: '113.557519,22.204118|13' }, {
            n: '台湾',
            g: '120.961454,23.80406|8'
        }]
    }

    function o(t) {
        var e = t.split('|')
        return e[0] = e[0].split(','), { lng: parseFloat(e[0][0]), lat: parseFloat(e[0][1]) }
    }

    var a = {
            getProvinceNameByCityName: function (t) {
                for (var e = i.provinces, n = 0; n < e.length; n++) for (var o = e[n].n, a = e[n].cities, r = 0; r < a.length; r++) if (a[r].n == t) return o
                return null
            },
            getCenterByCityName: function(t) {
                t = t.replace('市', '')
                for (var e = 0; e < i.municipalities.length; e++) if (i.municipalities[e].n == t) return o(i.municipalities[e].g)
                for (e = 0; e < i.other.length; e++) if (i.other[e].n == t) return o(i.other[e].g)
                var n = i.provinces
                for (e = 0; e < n.length; e++) {
                    if (n[e].n == t) return o(n[e].g)
                    for (var a = n[e].cities, r = 0; r < a.length; r++) if (a[r].n == t) return o(a[r].g)
                }
                return null
            }
        }, r = function (t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        },
        s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n]
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        h = function t(e, n, i) {
            null === e && (e = Function.prototype)
            var o = Object.getOwnPropertyDescriptor(e, n)
            if (void 0 === o) {
                var a = Object.getPrototypeOf(e)
                return null === a ? void 0 : t(a, n, i)
            }
            if ('value' in o) return o.value
            var r = o.get
            // console.log(r,'r')
            return void 0 !== r ? r.call(i) : void 0
        },
        l = function(t, e) {
            if ('function' !== typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        u = function (t, e) {
            if (!t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
            return !e || 'object' != typeof e && 'function' != typeof e ? t : e
        }

    function c(t, e) {
        n.bind(this)(),
            this._options = e || {},
            this._data = [],
        t && this.add(t)
    }

    c.prototype = n.prototype, c.prototype.add = function (t, e) {
        if (Array.isArray(t)) {
            for (var n = 0, i = t.length; n < i; n++) {
                if (t[n].time && 14 === t[n].time.length && '20' == t[n].time.substr(0, 2)) {
                    var o = t[n].time
                    t[n].time = new Date(o.substr(0, 4) + '-' + o.substr(4, 2) + '-' + o.substr(6, 2) + ' ' + o.substr(8, 2) + ':' + o.substr(10, 2) + ':' + o.substr(12, 2)).getTime()
                }
                this._data.push(t[n])
            }
        } else {
            if (!(t instanceof Object)) throw new Error('Unknown dataType')
            this._data.push(t)
        }
        this._dataCache = JSON.parse(JSON.stringify(this._data))
    }, c.prototype.reset = function () {
        this._data = JSON.parse(JSON.stringify(this._dataCache))
    }, c.prototype.get = function (t) {
        t = t || {}
        new Date
        var e = this._data
        new Date
        if (t.filter) {
            for (var n = [], i = 0; i < e.length; i++) t.filter(e[i]) && n.push(e[i]);
            e = n
        }
        return t.transferCoordinate && (e = this.transferCoordinate(e, t.transferCoordinate, t.fromColumn, t.toColumn)), e
    }, c.prototype.set = function (t) {
        this._set(t), this._trigger('change')
    }, c.prototype._set = function (t) {
        this.clear(), this.add(t)
    }, c.prototype.clear = function (t) {
        this._data = []
    }, c.prototype.remove = function (t) {
    }, c.prototype.update = function (t, e) {
        for (var n = this._data, i = 0; i < n.length; i++) {
            if (e) {
                var o = !0
                for (var a in e) n[i][a] != e[a] && (o = !1);
                o && t && t(n[i])
            } else {
                t && t(n[i])
            }
        }
        this._dataCache = JSON.parse(JSON.stringify(this._data)), this._trigger('change')
    }, c.prototype.transferCoordinate = function (t, e, n, i) {
        i = i || '_coordinates', n = n || 'coordinates'
        for (var o = 0; o < t.length; o++) {
            var a = t[o].geometry, r = a[n]
            switch (a.type) {
                case 'Point':
                    a[i] = e(r)
                    break
                case 'LineString':
                    for (var s = [], h = 0; h < r.length; h++) s.push(e(r[h]));
                    a[i] = s
                    break
                case 'MultiLineString':
                case 'Polygon':
                    s = c(r)
                    a[i] = s
                    break
                case 'MultiPolygon':
                    s = []
                    for (var l = 0; l < r.length; l++) {
                        var u = c(u = r[l])
                        s.push(u)
                    }
                    a[i] = s
            }
        }

        function c (t) {
            for (var n = [], i = 0; i < t.length; i++) {
                for (var o = t[i], a = [], r = 0; r < o.length; r++) a.push(e(o[r]));
                n.push(a)
            }
            return n
        }

        return t
    }, c.prototype.initGeometry = function (t) {
        t ? this._data.forEach(function (e) {
            e.geometry = t(e)
        }) : this._data.forEach(function (t) {
            if (!t.geometry) {
                if (t.lng && t.lat) {
                    t.geometry = {
                        type: 'Point',
                        coordinates: [t.lng, t.lat]
                    }
                } else if (t.city) {
                    var e = a.getCenterByCityName(t.city)
                    e && (t.geometry = { type: 'Point', coordinates: [e.lng, e.lat] })
                }
            }
        })
    }, c.prototype.getMax = function (t) {
        var e = this._data
        if (e && !(e.length <= 0)) {
            for (var n = parseFloat(e[0][t]), i = 1; i < e.length; i++) {
                var o = parseFloat(e[i][t])
                o > n && (n = o)
            }
            return n
        }
    }, c.prototype.getSum = function (t) {
        var e = this._data
        if (e && !(e.length <= 0)) {
            for (var n = 0, i = 0; i < e.length; i++) e[i][t] && (n += parseFloat(e[i][t]));
            return n
        }
    }, c.prototype.getMin = function (t) {
        var e = this._data
        if (e && !(e.length <= 0)) {
            for (var n = parseFloat(e[0][t]), i = 1; i < e.length; i++) {
                var o = parseFloat(e[i][t])
                o < n && (n = o)
            }
            return n
        }
    }, c.prototype.getUnique = function (t) {
        if ((i = this._data) && !(i.length <= 0)) {
            for (var e = {}, n = 1; n < i.length; n++) e[i[n][t]] = !0;
            var i = []
            for (var o in e) i.push(o);
            return i
        }
    }
    var g = {
            drawDataSet: function(t, e, n) {
                for (var i = e instanceof c ? e.get() : e, o = 0, a = i.length; o < a; o++) {
                    var r = i[o]
                    this.draw(t, r, n)
                }
            },
            /*
            * 控制点击范围
            * */
            draw: function(t, e, n) {
                // console.log(t,e,n, 'ten')
                var i = e.geometry.type,
                    o = e.geometry._coordinates || e.geometry.coordinates,
                    a = n.symbol || 'circle'
                switch (i) {
                    case'Point':
                        /*
                        *   r 半径，即点击范围半径
                        * */
                        var r =  n._size * 5 || n.size * 5 || e._size || e.size || 10
                        'circle' === a ? ('Point' === n.bigData && t.moveTo(o[0], o[1]),
                            // t.arc(o[0], o[1], r, 0, 2 * Math.PI))
                            t.sector(o[0],o[1],r+5,e.deg-105,e.deg-75)) : 'rect' === a ? t.rect(o[0] - r / 2,
                            o[1] - r / 2, r, r) : 'honeycomb' === a && function (t, e, n, i) {
                            for (var o = 0; o < 6; o++) {
                                var a = (r = {x: e,y: n},
                                    s = i,
                                    h = 60 * o + 30,
                                    l = Math.PI / 180 * h,
                                    [r.x + s * Math.cos(l),
                                        r.y + s * Math.sin(l)])
                            }
                            var r, s, h, l
                        }(t, o[0], o[1], r)
                        break
                    case'LineString':
                        this.drawLineString(t, o)
                        break
                    case'MultiLineString':
                        for (var s = 0; s < o.length; s++) {
                            var h = o[s]
                            this.drawLineString(t, h)
                        }
                        break
                    case'Polygon':
                        this.drawPolygon(t, o)
                        break
                    case'MultiPolygon':
                        for (s = 0; s < o.length; s++) {
                            var l = o[s]
                            this.drawPolygon(t, l), n.multiPolygonDraw && n.multiPolygonDraw()
                        }
                        break
                    default:
                        console.log('type' + i + 'is not support now!')
                }
            }, drawLineString: function (t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n][0], o = e[n][1]
                    0 == n ? t.moveTo(i, o) : t.lineTo(i, o)
                }
            }, drawPolygon: function (t, e) {
                t.beginPath()
                for (var n = 0; n < e.length; n++) {
                    var i = e[n]
                    t.moveTo(i[0][0], i[0][1])
                    for (var o = 1; o < i.length; o++) t.lineTo(i[o][0], i[o][1]);
                    t.lineTo(i[0][0], i[0][1]), t.closePath()
                }
            }
        },
        p = {
            draw: function (t, e, n) {
                var i = e instanceof c ? e.get() : e
                t.save()
                for (var o in n) t[o] = n[o];
                if (n.bigData) {
                    t.save(), t.beginPath()
                    for (var a = 0, r = i.length; a < r; a++) {
                        var s = i[a]
                        g.draw(t, s, n)
                    }
                    'Point' == (h = n.bigData) || 'Polygon' == h || 'MultiPolygon' == h ? (t.fill(), t.lineDash && t.setLineDash(t.lineDash), s.lineDash && t.setLineDash(s.lineDash), (s.strokeStyle || n.strokeStyle) && n.lineWidth && t.stroke()) : 'LineString' != h && 'MultiLineString' != h || t.stroke(), t.restore()
                } else {
                    for (a = 0, r = i.length; a < r; a++) {
                        s = i[a]
                        t.save(), (s.fillStyle || s._fillStyle) && (t.fillStyle = s.fillStyle || s._fillStyle), (s.strokeStyle || s._strokeStyle) && (t.strokeStyle = s.strokeStyle || s._strokeStyle), t.lineDash && t.setLineDash(t.lineDash), s.lineDash && t.setLineDash(s.lineDash)
                        var h = s.geometry.type
                        t.beginPath(), g.draw(t, s, n), n.multiPolygonDraw = function () {
                            t.fill(), (s.strokeStyle || n.strokeStyle) && n.lineWidth && t.stroke()
                        }, 'Point' == h || 'Polygon' == h || 'MultiPolygon' == h ? (t.fill(), (s.strokeStyle || n.strokeStyle) && n.lineWidth && t.stroke()) : 'LineString' != h && 'MultiLineString' != h || ((s.lineWidth || s._lineWidth) && (t.lineWidth = s.lineWidth || s._lineWidth), t.stroke()), t.restore()
                    }
                }
                t.restore()
            }
        }

    function v (t, e) {
        if ('undefined' == typeof document) {

        } else {
            var n = document.createElement('canvas')
            t && (n.width = t), e && (n.height = e)
        }
        return n
    }

    function d (t) {
        t = t || {}, this.gradient = t.gradient || {
            .25: 'rgba(0, 0, 255, 1)',
            .55: 'rgba(0, 255, 0, 1)',
            .85: 'rgba(255, 255, 0, 1)',
            1: 'rgba(255, 0, 0, 1)'
        }, this.maxSize = t.maxSize || 35, this.minSize = t.minSize || 0, this.max = t.max || 100, this.min = t.min || 0, this.initPalette()
    }

    d.prototype.setMax = function (t) {
        this.max = t || 100
    }, d.prototype.setMin = function (t) {
        this.min = t || 0
    }, d.prototype.setMaxSize = function (t) {
        this.maxSize = t || 35
    }, d.prototype.setMinSize = function (t) {
        this.minSize = t || 0
    }, d.prototype.initPalette = function () {
        var t = this.gradient, e = new v(256, 1), n = this.paletteCtx = e.getContext('2d'),
            i = n.createLinearGradient(0, 0, 256, 1)
        for (var o in t) i.addColorStop(parseFloat(o), t[o]);
        n.fillStyle = i, n.fillRect(0, 0, 256, 1)
    }, d.prototype.getColor = function (t) {
        var e = this.getImageData(t)
        return 'rgba(' + e[0] + ', ' + e[1] + ', ' + e[2] + ', ' + e[3] / 256 + ')'
    }, d.prototype.getImageData = function (t) {
        var e = this.paletteCtx.getImageData(0, 0, 256, 1).data
        if (void 0 === t) return e
        var n = this.max, i = this.min
        t > n && (t = n), t < i && (t = i)
        var o = 4 * Math.floor((t - i) / (n - i) * 255)
        return [e[o], e[o + 1], e[o + 2], e[o + 3]]
    }, d.prototype.getSize = function (t) {
        var e = this.max, n = this.min, i = this.maxSize, o = this.minSize
        return t > e && (t = e), t < n && (t = n), o + (t - n) / (e - n) * (i - o)
    }, d.prototype.getLegend = function (t) {
        var e = this.gradient, n = t.width || 20, i = t.height || 180, o = new v(n, i), a = o.getContext('2d'),
            r = a.createLinearGradient(0, i, 0, 0)
        for (var s in e) r.addColorStop(parseFloat(s), e[s]);
        return a.fillStyle = r, a.fillRect(0, 0, n, i), o
    }

    /*
    *     canvas绘图，在同一画布显示不同颜色的填充颜色的方法
    * */
    function chooseColor(t) {
        switch (t) {
            case 'blue':
                return '#0088FF'
            case 'red':
                return '#FF0000'
        }
    }

    var f = ('undefined' == typeof window ? {} : window).devicePixelRatio || 1

    function y (t) {
        return t.max || 100
    }

    function m (t) {
        return t.min || 0
    }
    function mycanvas(t,e,n) {
        for (let o = 0; e.length > o; o++) {
            var l = new d({ max: n.max || 100, gradient: n.gradient })
            var x = e[o].geometry._coordinates || e[o].geometry.coordinates
            var a = n._size || n.size || 40
            var b = 6 * a
            var ox = 0.5 * a,
                oy = 0.6 * b
            var deg = e[o].deg
            t.save()
            t.translate(x[0], x[1])
            if (deg) {
                t.rotate(deg * Math.PI / 180)
            }

            t.beginPath()
            t.moveTo(0, 0)
            /*
            *   分四部分画水滴状，右,左
            *
            * */
            t.bezierCurveTo(2 * a, -oy, 2 * ox, -b, 0, -b)
            t.bezierCurveTo(2 * -ox, -b, 2 * -a, -oy, 0, 0)
            const color = e[o].colorStyle
            t.fillStyle = chooseColor(color)
            t.closePath()
            t.fill()
            t.restore()
        }
    }
    function x (t, e, n) {
        var i = y(n), o = m(n), a = n._size
        void 0 == a && void 0 == (a = n.size) && (a = 13)
        var r, s, h, l, u, c = new d({ gradient: n.gradient, max: i, min: o }),
            p = (l = new v(2 * (h = (r = a) + (s = r / 2)), 2 * h), (u = l.getContext('2d')).shadowBlur = s, u.shadowColor = 'black', u.shadowOffsetX = u.shadowOffsetY = 1e4, u.beginPath(), u.arc(h - 1e4, h - 1e4, r, 0, 2 * Math.PI, !0), u.closePath(), u.fill(), l),
            f = p.width / 2, x = p.height / 2, _ = {}
        e.forEach(function (t, e) {
            var n = void 0 === t.count ? 1 : t.count, o = Math.min(1, n / i).toFixed(2)
            _[o] = _[o] || [], _[o].push(t)
        })
        for (var w in _) {
            if (!isNaN(w)) {
                var b = _[w]
                t.beginPath(), n.withoutAlpha || (t.globalAlpha = w), t.strokeStyle = c.getColor(w * i), b.forEach(function (e, o) {
                    if (e.geometry) {
                        var a = e.geometry._coordinates || e.geometry.coordinates, r = e.geometry.type
                        if ('Point' === r) {
                            var s = void 0 === e.count ? 1 : e.count
                            t.globalAlpha = s / i, t.drawImage(p, a[0] - f, a[1] - x)
                        } else if ('LineString' === r) {
                            s = void 0 === e.count ? 1 : e.count
                            t.globalAlpha = s / i, t.beginPath(), g.draw(t, e, n), t.stroke()
                        }
                    }
                })
            }
        }
    }

    var _ = {
            draw: function (t, e, n) {
                if (!(t.canvas.width <= 0 || t.canvas.height <= 0)) {
                    var i = n.strength || .3
                    t.strokeStyle = 'rgba(0,0,0,' + i + ')'
                    var o = new v(t.canvas.width, t.canvas.height), a = o.getContext('2d')
                    a.scale(f, f), n = n || {}
                    var r = e instanceof c ? e.get() : e
                    t.save()
                    var s = new d({ gradient: n.gradient })
                    if (x(a, r, n), !n.absolute) {
                        var h = a.getImageData(0, 0, t.canvas.width, t.canvas.height)
                        !function (t, e, n) {
                            var i = y(n), o = m(n), a = i - o, r = 0, s = 1024;
                            (u = n.range || null) && 2 === u.length && (r = (u[0] - o) / a * 1024), u && 2 === u.length && (s = (u[1] - o) / a * 1024)
                            for (var h, l = n.maxOpacity || .8, u = n.range, c = 3, g = t.length; c < g; c += 4) h = 4 * t[c], t[c] / 256 > l && (t[c] = 256 * l), h && h >= r && h <= s ? (t[c - 3] = e[h], t[c - 2] = e[h + 1], t[c - 1] = e[h + 2]) : t[c] = 0
                        }(h.data, s.getImageData(), n), t.putImageData(h, 0, 0), t.restore()
                    }
                    s = null, o = null
                }
            }
        },
        /*
        *   canvas矩形 （修改矩形为圆形）
        *
        * */
        w = {
            draw: function (t, e, n) {
                // console.log(t, e, n, 'w.draw')
                // console.log(localStorage.getItem('zoom'), 'this.map')
                var zoom = localStorage.getItem('zoom')
                // if (zoom < 13) {
                //     t.save()
                //     for (var i = e instanceof c ? e.get() : e, o = {}, a = n._size || n.size || 50, r = n.offset || {
                //             x: 0,
                //             y: 0
                //         },s = 0; s < i.length; s++) {
                //         var h = i[s].geometry._coordinates || i[s].geometry.coordinates
                //         /*
                //         *   h[0]  x轴方向，当前点的 x 坐标
                //         *   r 即offset，r.x 即 offset.x
                //         *   a size 大小
                //         * */
                //         // console.log(r, 'rrrrr')
                //         o[u = Math.floor((h[0] - r.x) / a) + ',' + Math.floor((h[1] - r.y) / a)] || (o[u] = 0),
                //         o[u] += ~~(i[s].count || 1)
                //         // console.log(o, 'u')
                //     }
                //     var l = new d({ max: n.max || 100, gradient: n.gradient })
                //     for (var u in o) {
                //         u = u.split(','),
                //         t.beginPath(),
                //         // t.rect(u[0] * a + .5 + r.x , u[1] * a + .5 + r.y , a , a ),
                //         /*
                //         *   画圆
                //         * */
                //         t.arc(u[0] * a + 0.5 + r.x + a / 2, u[1] * a + 0.5 + r.y + a / 2, a / 2, 0, 2 * Math.PI),
                //         t.fillStyle = chooseColor(o[u].colorStyle),
                //         // t.fillStyle = l.getColor(o[u]),
                //         t.fill(),
                //         n.strokeStyle && n.lineWidth && t.stroke()
                //     }
                //     if (n.label && !1 !== n.label.show) {
                //         t.fillStyle = n.label.fillStyle || 'white',
                //         n.label.font && (t.font = n.label.font),
                //         n.label.shadowColor && (t.shadowColor = n.label.shadowColor),
                //         n.label.shadowBlur && (t.shadowBlur = n.label.shadowBlur)
                //         for (var u in o) {
                //             var g = o[u = u.split(',')],
                //                 p = t.measureText(g).width
                //             t.fillText(g, u[0] * a + .5 + r.x + a / 2 - p / 2, u[1] * a + .5 + r.y + a / 2 + 5)
                //             /*
                //             *     图形文字位置
                //             * */
                //             // t.fillText(g, u[0] * a + 0.5 + r.x - 3 + a / 2, u[1] * a + 0.5 + r.y + 4 + a / 2)
                //         }
                //     }
                //     t.restore()
                // } else {
                // console.log('进来水滴')
                /*
                *   贝塞尔曲线画图
                *   x y 平移点
                *   a b 图形宽高
                *   deg 旋转角度
                *
                * */
                // console.log(t,'w_draw-t')
                mycanvas(t,e,n)
            }
            // }
        }
    /*
    *   蜂窝
    * */
    var b = {
        draw: function(t, e, n) {
            t.save()
            var i = e instanceof c ? e.get() : e
            for (var o in n) t[o] = n[o];
            for (var a = n.offset || {
                    x: 10,
                    y: 10
                },
                     r = n._size || n.size || 40,
                     s = 2 * (r = r / 2 / Math.sin(Math.PI / 3)) * Math.sin(Math.PI / 3),
                     h = 1.5 * r, l = {}, u = 0; u < i.length; u++) {
                var g = i[u].geometry._coordinates || i[u].geometry.coordinates,
                    p = (g[1] - a.y) / h,
                    v = Math.round(p),
                    f = (g[0] - a.x) / s - (1 & v ? .5 : 0),
                    y = Math.round(f), m = p - v
                if (3 * Math.abs(m) > 1) {
                    var x = f - y, _ = y + (f < y ? -1 : 1) / 2,
                        w = v + (p < v ? -1 : 1),
                        b = f - _, k = p - w
                    x * x + m * m > b * b + k * k && (y = _ + (1 & v ? 1 : -1) / 2, v = w)
                }
                var S = y + '-' + v, L = l[S]
                L ? L.push(i[u]) : ((L = l[S] = [i[u]]).i = y, L.j = v, L.x = (y + (1 & v ? .5 : 0)) * s, L.y = v * h)
            }
            var M, C, E, P, A = new d({ max: n.max || 100, maxSize: r, gradient: n.gradient })
            for (var o in l) {
                var z = l[o]
                t.beginPath()
                for (var R = 0; R < 6; R++) {
                    var O = (M = {
                        x: z.x + a.x,
                        y: z.y + a.y
                    },
                        C = r, void 0, void 0, E = 60 * R + 30, P = Math.PI / 180 * E, [M.x + C * Math.cos(P), M.y + C * Math.sin(P)])
                    t.lineTo(O[0], O[1])
                }
                t.closePath()
                var F = 0
                for (u = 0; u < z.length; u++) F += z[u].count || 1;
                z.count = F,
                    t.fillStyle = A.getColor(F),
                    t.fill(),
                n.strokeStyle && n.lineWidth && t.stroke()
            }
            if (n.label && !1 !== n.label.show) {
                t.fillStyle = n.label.fillStyle || 'white',
                n.label.font && (t.font = n.label.font),
                n.label.shadowColor && (t.shadowColor = n.label.shadowColor),
                n.label.shadowBlur && (t.shadowBlur = n.label.shadowBlur)
                for (var o in l) {
                    var T = (z = l[o]).count
                    T = T < 0 ? T.toFixed(2) : ~~T
                    var I = t.measureText(T).width
                    t.fillText(T, z.x + a.x - I / 2, z.y + a.y + 5)
                }
            }
            t.restore()
        }
    }

    function k (t, e, n) {
        var i = t.createShader(n)
        return t.shaderSource(i, e), t.compileShader(i), i
    }

    function S (t, e, n) {
        var i = k(t, e, t.VERTEX_SHADER), o = k(t, n, t.FRAGMENT_SHADER), a = t.createProgram()
        return t.attachShader(a, i), t.attachShader(a, o), t.linkProgram(a), t.useProgram(a), a
    }

    function L (t) {
        var e = document.createElement('canvas'), n = e.getContext('2d')
        return e.width = 1, e.height = 1, n.fillStyle = t, n.fillRect(0, 0, 1, 1), n.getImageData(0, 0, 1, 1).data
    }

    var M = ['attribute vec4 a_Position;', 'void main() {', 'gl_Position = a_Position;', 'gl_PointSize = 30.0;', '}'].join(''),
        C = ['precision mediump float;', 'uniform vec4 u_FragColor;', 'void main() {', 'gl_FragColor = u_FragColor;', '}'].join('')
    var E = {
            draw: function (t, e, n) {
                if (e) {
                    var i = S(t, M, C)
                    t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE), t.clear(t.COLOR_BUFFER_BIT)
                    var o = t.canvas.width / 2, a = t.canvas.height / 2, r = t.createBuffer()
                    t.bindBuffer(t.ARRAY_BUFFER, r)
                    var s = t.getAttribLocation(i, 'a_Position')
                    t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(s)
                    var h = t.getUniformLocation(i, 'u_FragColor'), l = L(n.strokeStyle || 'red')
                    t.uniform4f(h, l[0] / 255, l[1] / 255, l[2] / 255, l[3] / 255), t.lineWidth(n.lineWidth || 1)
                    for (var u = 0, c = e.length; u < c; u++) {
                        for (var g = e[u].geometry._coordinates, p = [], v = 0; v < g.length; v++) {
                            var d = g[v], f = (d[0] - o) / o, y = (a - d[1]) / a
                            p.push(f, y)
                        }
                        var m = new Float32Array(p)
                        t.bufferData(t.ARRAY_BUFFER, m, t.STATIC_DRAW), t.drawArrays(t.LINE_STRIP, 0, g.length)
                    }
                }
            }
        },
        A = ['attribute vec4 a_Position;', 'attribute float a_PointSize;', 'void main() {', 'gl_Position = a_Position;', 'gl_PointSize = a_PointSize;', '}'].join(''),
        z = ['precision mediump float;', 'uniform vec4 u_FragColor;', 'void main() {', 'gl_FragColor = u_FragColor;', '}'].join('')
    var R = {
        draw: function (t, e, n) {
            if (e) {
                var i = S(t, A, z), o = t.getAttribLocation(i, 'a_Position'), a = t.getAttribLocation(i, 'a_PointSize'),
                    r = t.getUniformLocation(i, 'u_FragColor')
                t.clear(t.COLOR_BUFFER_BIT)
                for (var s = t.canvas.width / 2, h = t.canvas.height / 2, l = [], u = 0, c = 0; c < e.length; c++) {
                    var g = e[c].geometry._coordinates, p = (g[0] - s) / s, v = (h - g[1]) / h
                    p < -1 || p > 1 || v < -1 || v > 1 || (l.push(p, v), u++)
                }
                var d = new Float32Array(l), f = u, y = t.createBuffer()
                t.bindBuffer(t.ARRAY_BUFFER, y), t.bufferData(t.ARRAY_BUFFER, d, t.STATIC_DRAW), t.vertexAttribPointer(o, 2, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(o), t.vertexAttrib1f(a, n._size)
                var m = L(n.fillStyle || 'red')
                t.uniform4f(r, m[0] / 255, m[1] / 255, m[2] / 255, m[3] / 255), t.drawArrays(t.POINTS, 0, f)
            }
        }
    }

    function O (t, e, n) {
        n = n || 2
        var i, o, a, r, s, h, l, u = e && e.length, c = u ? e[0] * n : t.length, g = F(t, 0, c, n, !0), p = []
        if (!g) return p
        if (u && (g = function (t, e, n, i) {
                var o, a, r, s, h, l = []
                for (o = 0, a = e.length; o < a; o++) r = e[o] * i, s = o < a - 1 ? e[o + 1] * i : t.length, (h = F(t, r, s, i, !1)) === h.next && (h.steiner = !0), l.push(H(h));
                for (l.sort(j), o = 0; o < l.length; o++) Z(l[o], n), n = T(n, n.next);
                return n
            }(t, e, g, n)), t.length > 80 * n) {
            i = a = t[0], o = r = t[1]
            for (var v = n; v < c; v += n) s = t[v], h = t[v + 1], s < i && (i = s), h < o && (o = h), s > a && (a = s), h > r && (r = h);
            l = Math.max(a - i, r - o)
        }
        return I(g, p, n, i, o, l), p
    }

    function F (t, e, n, i, o) {
        var a, r
        if (o === tt(t, e, n, i) > 0) for (a = e; a < n; a += i) r = Q(a, t[a], t[a + 1], r); else for (a = n - i; a >= e; a -= i) r = Q(a, t[a], t[a + 1], r);
        return r && Y(r, r.next) && (X(r), r = r.next), r
    }

    function T (t, e) {
        if (!t) return t
        e || (e = t)
        var n, i = t
        do {
            if (n = !1, i.steiner || !Y(i, i.next) && 0 !== $(i.prev, i, i.next)) {
                i = i.next
            } else {
                if (X(i), (i = e = i.prev) === i.next) return null
                n = !0
            }
        } while (n || i !== e)
        return e
    }

    function I (t, e, n, i, o, a, r) {
        if (t) {
            !r && a && function (t, e, n, i) {
                var o = t
                do {
                    null === o.z && (o.z = W(o.x, o.y, e, n, i)), o.prevZ = o.prev, o.nextZ = o.next, o = o.next
                } while (o !== t)
                o.prevZ.nextZ = null, o.prevZ = null, function (t) {
                    var e, n, i, o, a, r, s, h, l = 1
                    do {
                        for (n = t, t = null, a = null, r = 0; n;) {
                            for (r++, i = n, s = 0, e = 0; e < l && (s++, i = i.nextZ); e++) ;
                            for (h = l; s > 0 || h > 0 && i;) 0 === s ? (o = i, i = i.nextZ, h--) : 0 !== h && i ? n.z <= i.z ? (o = n, n = n.nextZ, s--) : (o = i, i = i.nextZ, h--) : (o = n, n = n.nextZ, s--), a ? a.nextZ = o : t = o, o.prevZ = a, a = o;
                            n = i
                        }
                        a.nextZ = null, l *= 2
                    } while (r > 1)
                }(o)
            }(t, i, o, a)
            for (var s, h, l = t; t.prev !== t.next;) {
                if (s = t.prev, h = t.next, a ? B(t, i, o, a) : D(t)) {
                    e.push(s.i / n), e.push(t.i / n), e.push(h.i / n), X(t), t = h.next, l = h.next
                } else if ((t = h) === l) {
                    r ? 1 === r ? I(t = U(t, e, n), e, n, i, o, a, 2) : 2 === r && N(t, e, n, i, o, a) : I(T(t), e, n, i, o, a, 1)
                    break
                }
            }
        }
    }

    function D (t) {
        var e = t.prev, n = t, i = t.next
        if ($(e, n, i) >= 0) return !1
        for (var o = t.next.next; o !== t.prev;) {
            if (q(e.x, e.y, n.x, n.y, i.x, i.y, o.x, o.y) && $(o.prev, o, o.next) >= 0) return !1
            o = o.next
        }
        return !0
    }

    function B (t, e, n, i) {
        var o = t.prev, a = t, r = t.next
        if ($(o, a, r) >= 0) return !1
        for (var s = o.x < a.x ? o.x < r.x ? o.x : r.x : a.x < r.x ? a.x : r.x, h = o.y < a.y ? o.y < r.y ? o.y : r.y : a.y < r.y ? a.y : r.y, l = o.x > a.x ? o.x > r.x ? o.x : r.x : a.x > r.x ? a.x : r.x, u = o.y > a.y ? o.y > r.y ? o.y : r.y : a.y > r.y ? a.y : r.y, c = W(s, h, e, n, i), g = W(l, u, e, n, i), p = t.nextZ; p && p.z <= g;) {
            if (p !== t.prev && p !== t.next && q(o.x, o.y, a.x, a.y, r.x, r.y, p.x, p.y) && $(p.prev, p, p.next) >= 0) return !1
            p = p.nextZ
        }
        for (p = t.prevZ; p && p.z >= c;) {
            if (p !== t.prev && p !== t.next && q(o.x, o.y, a.x, a.y, r.x, r.y, p.x, p.y) && $(p.prev, p, p.next) >= 0) return !1
            p = p.prevZ
        }
        return !0
    }

    function U (t, e, n) {
        var i = t
        do {
            var o = i.prev, a = i.next.next
            !Y(o, a) && G(o, i, i.next, a) && J(o, a) && J(a, o) && (e.push(o.i / n), e.push(i.i / n), e.push(a.i / n), X(i), X(i.next), i = t = a), i = i.next
        } while (i !== t)
        return i
    }

    function N (t, e, n, i, o, a) {
        var r, s, h = t
        do {
            for (var l = h.next.next; l !== h.prev;) {
                if (h.i !== l.i && (s = l, (r = h).next.i !== s.i && r.prev.i !== s.i && !function (t, e) {
                        var n = t
                        do {
                            if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && G(n, n.next, t, e)) return !0
                            n = n.next
                        } while (n !== t)
                        return !1
                    }(r, s) && J(r, s) && J(s, r) && function (t, e) {
                        var n = t, i = !1, o = (t.x + e.x) / 2, a = (t.y + e.y) / 2
                        do {
                            n.y > a != n.next.y > a && o < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
                        } while (n !== t)
                        return i
                    }(r, s))) {
                    var u = V(h, l)
                    return h = T(h, h.next), u = T(u, u.next), I(h, e, n, i, o, a), void I(u, e, n, i, o, a)
                }
                l = l.next
            }
            h = h.next
        } while (h !== t)
    }

    function j (t, e) {
        return t.x - e.x
    }

    function Z (t, e) {
        if (e = function (t, e) {
                var n, i = e, o = t.x, a = t.y, r = -1 / 0
                do {
                    if (a <= i.y && a >= i.next.y) {
                        var s = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y)
                        if (s <= o && s > r) {
                            if (r = s, s === o) {
                                if (a === i.y) return i
                                if (a === i.next.y) return i.next
                            }
                            n = i.x < i.next.x ? i : i.next
                        }
                    }
                    i = i.next
                } while (i !== e)
                if (!n) return null
                if (o === r) return n.prev
                var h, l = n, u = n.x, c = n.y, g = 1 / 0
                i = n.next
                for (; i !== l;) o >= i.x && i.x >= u && q(a < c ? o : r, a, u, c, a < c ? r : o, a, i.x, i.y) && ((h = Math.abs(a - i.y) / (o - i.x)) < g || h === g && i.x > n.x) && J(i, t) && (n = i, g = h), i = i.next;
                return n
            }(t, e)) {
            var n = V(e, t)
            T(n, n.next)
        }
    }
    // 画点击范围的 扇形
    CanvasRenderingContext2D.prototype.sector = function(x,y,r,sDeg,eDeg){
        this.save();
        this.translate(x,y);
        this.beginPath();
        this.arc(0,0,r,sDeg*Math.PI/180,eDeg*Math.PI/180);
        this.lineTo(0,0);
        this.rotate(sDeg*Math.PI/180);
        this.lineTo(r,0);
        this.restore();
        return this;
    }

    function W (t, e, n, i, o) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) / o) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) / o) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }

    function H (t) {
        var e = t, n = t
        do {
            e.x < n.x && (n = e), e = e.next
        } while (e !== t)
        return n
    }

    function q (t, e, n, i, o, a, r, s) {
        return (o - r) * (e - s) - (t - r) * (a - s) >= 0 && (t - r) * (i - s) - (n - r) * (e - s) >= 0 && (n - r) * (a - s) - (o - r) * (i - s) >= 0
    }

    function $ (t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }

    function Y (t, e) {
        return t.x === e.x && t.y === e.y
    }

    function G (t, e, n, i) {
        return !!(Y(t, e) && Y(n, i) || Y(t, i) && Y(n, e)) || $(t, e, n) > 0 != $(t, e, i) > 0 && $(n, i, t) > 0 != $(n, i, e) > 0
    }

    function J (t, e) {
        return $(t.prev, t, t.next) < 0 ? $(t, e, t.next) >= 0 && $(t, t.prev, e) >= 0 : $(t, e, t.prev) < 0 || $(t, t.next, e) < 0
    }

    function V (t, e) {
        var n = new K(t.i, t.x, t.y), i = new K(e.i, e.x, e.y), o = t.next, a = e.prev
        return t.next = e, e.prev = t, n.next = o, o.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
    }

    function Q (t, e, n, i) {
        var o = new K(t, e, n)
        return i ? (o.next = i.next, o.prev = i, i.next.prev = o, i.next = o) : (o.prev = o, o.next = o), o
    }

    function X (t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function K (t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function tt (t, e, n, i) {
        for (var o = 0, a = e, r = n - i; a < n; a += i) o += (t[r] - t[a]) * (t[a + 1] + t[r + 1]), r = a;
        return o
    }

    O.deviation = function (t, e, n, i) {
        var o = e && e.length, a = o ? e[0] * n : t.length, r = Math.abs(tt(t, 0, a, n))
        if (o) {
            for (var s = 0, h = e.length; s < h; s++) {
                var l = e[s] * n, u = s < h - 1 ? e[s + 1] * n : t.length
                r -= Math.abs(tt(t, l, u, n))
            }
        }
        var c = 0
        for (s = 0; s < i.length; s += 3) {
            var g = i[s] * n, p = i[s + 1] * n, v = i[s + 2] * n
            c += Math.abs((t[g] - t[v]) * (t[p + 1] - t[g + 1]) - (t[g] - t[p]) * (t[v + 1] - t[g + 1]))
        }
        return 0 === r && 0 === c ? 0 : Math.abs((c - r) / r)
    }, O.flatten = function (t) {
        for (var e = t[0][0].length, n = { vertices: [], holes: [], dimensions: e }, i = 0, o = 0; o < t.length; o++) {
            for (var a = 0; a < t[o].length; a++) for (var r = 0; r < e; r++) n.vertices.push(t[o][a][r])
            o > 0 && (i += t[o - 1].length, n.holes.push(i))
        }
        return n
    }
    var et = ['attribute vec4 a_Position;', 'void main() {', 'gl_Position = a_Position;', 'gl_PointSize = 30.0;', '}'].join(''),
        nt = ['precision mediump float;', 'uniform vec4 u_FragColor;', 'void main() {', 'gl_FragColor = u_FragColor;', '}'].join('')
    var it = {
        draw: function (t, e, n) {
            if (e) {
                t.clear(t.COLOR_BUFFER_BIT), t.viewport(0, 0, t.canvas.width, t.canvas.height)
                var i = S(t, et, nt)
                t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE)
                var o = t.canvas.width / 2, a = t.canvas.height / 2
                t.bindBuffer(t.ARRAY_BUFFER, t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, t.createBuffer())
                var r = t.getAttribLocation(i, 'a_Position')
                t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(r)
                var s = t.getUniformLocation(i, 'u_FragColor'), h = L(n.fillStyle || 'red')
                t.uniform4f(s, h[0] / 255, h[1] / 255, h[2] / 255, h[3] / 255), t.lineWidth(n.lineWidth || 1)
                for (var l = [], u = [], c = 0, g = 0, p = e.length; g < p; g++) {
                    var v = O.flatten(e[g].geometry._coordinates || e[g].geometry.coordinates), d = v.vertices
                    c = l.length / 2
                    for (var f = 0; f < d.length; f += 2) d[f] = (d[f] - o) / o, d[f + 1] = (a - d[f + 1]) / a;
                    for ((l.length + d.length) / 2 > 65536 && (t.bufferData(t.ARRAY_BUFFER, new Float32Array(l), t.STATIC_DRAW), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(u), t.STATIC_DRAW), t.drawElements(t.TRIANGLES, u.length, t.UNSIGNED_SHORT, 0), l.length = 0, u.length = 0, c = 0), f = 0; f < d.length; f++) l.push(d[f]);
                    var y = O(d, v.holes, v.dimensions)
                    for (f = 0; f < y.length; f++) u.push(y[f] + c)
                }
                t.bufferData(t.ARRAY_BUFFER, new Float32Array(l), t.STATIC_DRAW), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(u), t.STATIC_DRAW), t.drawElements(t.TRIANGLES, u.length, t.UNSIGNED_SHORT, 0), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
            }
        }
    }, ot = {
        draw: function (t, e, n) {
            var i = e instanceof c ? e.get() : e
            i.length > 0 && ('LineString' == i[0].geometry.type ? E.draw(t, i, n) : 'Polygon' == i[0].geometry.type || 'MultiPolygon' == i[0].geometry.type ? it.draw(t, i, n) : R.draw(t, i, n))
        }
    }

    function at (t, e, n) {
        if (console.info(t, e), !t || !e) return null
        var i, o, a, r, s, h, l = function (t) {
            return 1 - 2 * t + t * t
        }, u = function (t) {
            return 2 * t - 2 * t * t
        }, c = function (t) {
            return t * t
        }, g = [], p = (n = n || 40, 0), v = 0
        if (void 0 !== e) {
            var d = parseFloat(t.lat), f = parseFloat(e.lat), y = parseFloat(t.lng), m = parseFloat(e.lng)
            for (m > y && parseFloat(m - y) > 180 && y < 0 && (y = parseFloat(360 + y), m = parseFloat(360 + m)), 0, h = 0, f == d ? (i = 0, o = y - m) : m == y ? (i = Math.PI / 2, o = d - f) : (i = Math.atan((f - d) / (m - y)), o = (f - d) / Math.sin(i)), 0 == h && (h = i + Math.PI / 5), s = (a = o / 2) * Math.cos(h) + y, r = a * Math.sin(h) + d, p = 0; p < n + 1; p++) {
                var x = y * l(v) + s * u(v) + m * c(v), _ = d * l(v) + r * u(v) + f * c(v), w = t.lng, b = e.lng
                g.push([w < 0 && b > 0 ? x - 360 : x, _]), v += 1 / n
            }
            return g
        }
        void 0 !== g && (g = [])
    }

    var rt = {
        getPoints: function (t, e) {
            e = e || {}
            for (var n = [], i = 0; i < t.length - 1; i++) {
                var o = at(t[i], t[i + 1], e.count)
                o && o.length > 0 && (n = n.concat(o))
            }
            return n
        }
    }

    function st (t) {
        this.splitList = t || { other: 1 }
    }

    function ht (t) {
        this.splitList = t || [{ start: 0, value: 'red' }]
    }

    st.prototype.get = function (t) {
        var e = this.splitList, n = e.other
        for (var i in e) {
            if (t == i) {
                n = e[i]
                break
            }
        }
        return n
    }, st.prototype.generateByDataSet = function (t, e) {
        var n = e || ['rgba(255, 255, 0, 0.8)', 'rgba(253, 98, 104, 0.8)', 'rgba(255, 146, 149, 0.8)', 'rgba(255, 241, 193, 0.8)', 'rgba(110, 176, 253, 0.8)', 'rgba(52, 139, 251, 0.8)', 'rgba(17, 102, 252, 0.8)'],
            i = t.get()
        this.splitList = {}
        for (var o = 0, a = 0; a < i.length && (void 0 === this.splitList[i[a].count] && (this.splitList[i[a].count] = n[o], o++), !(o >= n.length - 1)); a++) ;
        this.splitList.other = n[n.length - 1]
    }, st.prototype.getLegend = function (t) {
        var e = this.splitList, n = document.createElement('div')
        n.style.cssText = 'background:#fff; padding: 5px; border: 1px solid #ccc;'
        var i = ''
        for (var o in e) i += '<div style="line-height: 19px;" value="' + o + '"><span style="vertical-align: -2px; display: inline-block; width: 30px;height: 19px;background:' + e[o] + ';"></span><span style="margin-left: 3px;">' + o + '<span></div>';
        return n.innerHTML = i, n
    }, ht.prototype.get = function (t) {
        for (var e = this.splitList, n = !1, i = 0; i < e.length; i++) {
            if ((void 0 === e[i].start || void 0 !== e[i].start && t >= e[i].start) && (void 0 === e[i].end || void 0 !== e[i].end && t < e[i].end)) {
                n = e[i].value
                break
            }
        }
        return n
    }, ht.prototype.generateByDataSet = function (t) {
        var e = t.getMin('count'), n = t.getMax('count')
        this.generateByMinMax(e, n)
    }, ht.prototype.generateByMinMax = function (t, e) {
        var n = ['rgba(255, 255, 0, 0.8)', 'rgba(253, 98, 104, 0.8)', 'rgba(255, 146, 149, 0.8)', 'rgba(255, 241, 193, 0.8)', 'rgba(110, 176, 253, 0.8)', 'rgba(52, 139, 251, 0.8)', 'rgba(17, 102, 252, 0.8)'],
            i = Number((e - t) / 7)
        e = Number(e)
        var o = Number(t)
        this.splitList = []
        for (var a = 0; o < e;) this.splitList.push({ start: o, end: o + i, value: n[a] }), a++, o += i
    }, ht.prototype.getLegend = function (t) {
        this.splitList
    }
    var lt = function () {
        function t (e, n, i) {
            if (r(this, t), !e || !n) return console.warn('id 和 type 为必填项'), !1
            if ('baidu' == n) {
                if (!BMap) return console.warn('请先引入百度地图JS API'), !1
            } else {
                console.warn('暂不支持你的地图类型')
            }
            this.type = n
            var o = i && i.center ? i.center : [106.962497, 38.208726], a = i && i.zoom ? i.zoom : 5,
                s = this.map = new BMap.Map(e, { enableMapClick: !1 })
            s.centerAndZoom(new BMap.Point(o[0], o[1]), a), s.enableScrollWheelZoom(!0), s.setMapStyle({ style: 'light' })
        }

        return s(t, [{
            key: 'addLayer', value: function (t, e) {
                if ('baidu' == this.type) return new mapv.baiduMapLayer(this.map, dataSet, e)
            }
        }, {
            key: 'getMap', value: function () {
                return this.map
            }
        }]), t
    }()

    function ut (t) {
        this.options = t || {}, this.paneName = this.options.paneName || 'mapPane', this.context = this.options.context || '2d', this.zIndex = this.options.zIndex || 0, this.mixBlendMode = this.options.mixBlendMode || null, this.enableMassClear = this.options.enableMassClear, this._map = t.map, this._lastDrawTime = null, this.show()
    }

    var ct = 'undefined' == typeof window ? {} : window
    ct.BMap && (ut.prototype = new BMap.Overlay, ut.prototype.initialize = function (t) {
        this._map = t
        var e = this.canvas = document.createElement('canvas')
        e.style.cssText = 'position:absolute;left:0;top:0;z-index:' + this.zIndex + ';user-select:none;', e.style.mixBlendMode = this.mixBlendMode, this.adjustSize(), t.getPanes()[this.paneName].appendChild(e)
        var n = this
        return t.addEventListener('resize', function () {
            n.adjustSize(), n._draw()
        }), this.canvas
    }, ut.prototype.adjustSize = function () {
        var t = this._map.getSize(), e = this.canvas, n = this.devicePixelRatio = ct.devicePixelRatio || 1
        e.width = t.width * n, e.height = t.height * n, '2d' == this.context && e.getContext(this.context).scale(n, n), e.style.width = t.width + 'px', e.style.height = t.height + 'px'
    }, ut.prototype.draw = function () {
        var t = this
        clearTimeout(t.timeoutID), t.timeoutID = setTimeout(function () {
            t._draw()
        }, 15)
    }, ut.prototype._draw = function () {
        var t = this._map, e = t.getSize(), n = t.getCenter()
        if (n) {
            var i = t.pointToOverlayPixel(n)
            this.canvas.style.left = i.x - e.width / 2 + 'px', this.canvas.style.top = i.y - e.height / 2 + 'px', this.dispatchEvent('draw'), this.options.update && this.options.update.call(this)
        }
    }, ut.prototype.getContainer = function () {
        return this.canvas
    }, ut.prototype.show = function () {
        this.canvas || this._map.addOverlay(this), this.canvas.style.display = 'block'
    }, ut.prototype.hide = function () {
        this.canvas.style.display = 'none'
    }, ut.prototype.setZIndex = function (t) {
        this.zIndex = t, this.canvas.style.zIndex = this.zIndex
    }, ut.prototype.getZIndex = function () {
        return this.zIndex
    })
    var gt, pt, vt = vt || (gt = [], {
        getAll: function () {
            return gt
        }, removeAll: function () {
            gt = []
        }, add: function (t) {
            gt.push(t)
        }, remove: function (t) {
            var e = gt.indexOf(t);
            -1 !== e && gt.splice(e, 1)
        }, update: function (t, e) {
            if (0 === gt.length) return !1
            var n = 0
            for (t = void 0 !== t ? t : vt.now(); n < gt.length;) gt[n].update(t) || e ? n++ : gt.splice(n, 1);
            return !0
        }
    })
    'undefined' == typeof window && 'undefined' != typeof process ? vt.now = function () {
        var t = process.hrtime()
        return 1e3 * t[0] + t[1] / 1e6
    } : 'undefined' != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? vt.now = window.performance.now.bind(window.performance) : void 0 !== Date.now ? vt.now = Date.now : vt.now = function () {
        return (new Date).getTime()
    }, vt.Tween = function (t) {
        var e, n = t, i = {}, o = {}, a = {}, r = 1e3, s = 0, h = !1, l = !1, u = !1, c = 0, g = null,
            p = vt.Easing.Linear.None, v = vt.Interpolation.Linear, d = [], f = null, y = !1, m = null, x = null,
            _ = null
        this.to = function (t, e) {
            return o = t, void 0 !== e && (r = e), this
        }, this.start = function (t) {
            vt.add(this), l = !0, y = !1, g = void 0 !== t ? t : vt.now(), g += c
            for (var e in o) {
                if (o[e] instanceof Array) {
                    if (0 === o[e].length) continue
                    o[e] = [n[e]].concat(o[e])
                }
                void 0 !== n[e] && (i[e] = n[e], i[e] instanceof Array == !1 && (i[e] *= 1), a[e] = i[e] || 0)
            }
            return this
        }, this.stop = function () {
            return l ? (vt.remove(this), l = !1, null !== _ && _.call(n, n), this.stopChainedTweens(), this) : this
        }, this.end = function () {
            return this.update(g + r), this
        }, this.stopChainedTweens = function () {
            for (var t = 0, e = d.length; t < e; t++) d[t].stop()
        }, this.delay = function (t) {
            return c = t, this
        }, this.repeat = function (t) {
            return s = t, this
        }, this.repeatDelay = function (t) {
            return e = t, this
        }, this.yoyo = function (t) {
            return h = t, this
        }, this.easing = function (t) {
            return p = t, this
        }, this.interpolation = function (t) {
            return v = t, this
        }, this.chain = function () {
            return d = arguments, this
        }, this.onStart = function (t) {
            return f = t, this
        }, this.onUpdate = function (t) {
            return m = t, this
        }, this.onComplete = function (t) {
            return x = t, this
        }, this.onStop = function (t) {
            return _ = t, this
        }, this.update = function (t) {
            var l, _, w
            if (t < g) return !0
            !1 === y && (null !== f && f.call(n, n), y = !0), w = p(_ = (_ = (t - g) / r) > 1 ? 1 : _)
            for (l in o) {
                if (void 0 !== i[l]) {
                    var b = i[l] || 0, k = o[l]
                    k instanceof Array ? n[l] = v(k, w) : ('string' == typeof k && (k = '+' === k.charAt(0) || '-' === k.charAt(0) ? b + parseFloat(k) : parseFloat(k)), 'number' == typeof k && (n[l] = b + (k - b) * w))
                }
            }
            if (null !== m && m.call(n, w), 1 === _) {
                if (s > 0) {
                    isFinite(s) && s--
                    for (l in a) {
                        if ('string' == typeof o[l] && (a[l] = a[l] + parseFloat(o[l])), h) {
                            var S = a[l]
                            a[l] = o[l], o[l] = S
                        }
                        i[l] = a[l]
                    }
                    return h && (u = !u), g = void 0 !== e ? t + e : t + c, !0
                }
                null !== x && x.call(n, n)
                for (var L = 0, M = d.length; L < M; L++) d[L].start(g + r);
                return !1
            }
            return !0
        }
    }, vt.Easing = {
        Linear: {
            None: function (t) {
                return t
            }
        }, Quadratic: {
            In: function (t) {
                return t * t
            }, Out: function (t) {
                return t * (2 - t)
            }, InOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }
        }, Cubic: {
            In: function (t) {
                return t * t * t
            }, Out: function (t) {
                return --t * t * t + 1
            }, InOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }
        }, Quartic: {
            In: function (t) {
                return t * t * t * t
            }, Out: function (t) {
                return 1 - --t * t * t * t
            }, InOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }
        }, Quintic: {
            In: function (t) {
                return t * t * t * t * t
            }, Out: function (t) {
                return --t * t * t * t * t + 1
            }, InOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }
        }, Sinusoidal: {
            In: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Out: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, InOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }
        }, Exponential: {
            In: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            }, Out: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, InOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }
        }, Circular: {
            In: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Out: function (t) {
                return Math.sqrt(1 - --t * t)
            }, InOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }
        }, Elastic: {
            In: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
            }, Out: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
            }, InOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1
            }
        }, Back: {
            In: function (t) {
                return t * t * (2.70158 * t - 1.70158)
            }, Out: function (t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            }, InOut: function (t) {
                var e = 2.5949095
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }
        }, Bounce: {
            In: function (t) {
                return 1 - vt.Easing.Bounce.Out(1 - t)
            }, Out: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, InOut: function (t) {
                return t < .5 ? .5 * vt.Easing.Bounce.In(2 * t) : .5 * vt.Easing.Bounce.Out(2 * t - 1) + .5
            }
        }
    }, vt.Interpolation = {
        Linear: function (t, e) {
            var n = t.length - 1, i = n * e, o = Math.floor(i), a = vt.Interpolation.Utils.Linear
            return e < 0 ? a(t[0], t[1], i) : e > 1 ? a(t[n], t[n - 1], n - i) : a(t[o], t[o + 1 > n ? n : o + 1], i - o)
        }, Bezier: function (t, e) {
            for (var n = 0, i = t.length - 1, o = Math.pow, a = vt.Interpolation.Utils.Bernstein, r = 0; r <= i; r++) n += o(1 - e, i - r) * o(e, r) * t[r] * a(i, r);
            return n
        }, CatmullRom: function (t, e) {
            var n = t.length - 1, i = n * e, o = Math.floor(i), a = vt.Interpolation.Utils.CatmullRom
            return t[0] === t[n] ? (e < 0 && (o = Math.floor(i = n * (1 + e))), a(t[(o - 1 + n) % n], t[o], t[(o + 1) % n], t[(o + 2) % n], i - o)) : e < 0 ? t[0] - (a(t[0], t[0], t[1], t[1], -i) - t[0]) : e > 1 ? t[n] - (a(t[n], t[n], t[n - 1], t[n - 1], i - n) - t[n]) : a(t[o ? o - 1 : 0], t[o], t[n < o + 1 ? n : o + 1], t[n < o + 2 ? n : o + 2], i - o)
        }, Utils: {
            Linear: function (t, e, n) {
                return (e - t) * n + t
            }, Bernstein: function (t, e) {
                var n = vt.Interpolation.Utils.Factorial
                return n(t) / n(e) / n(t - e)
            }, Factorial: (pt = [1], function (t) {
                var e = 1
                if (pt[t]) return pt[t]
                for (var n = t; n > 1; n--) e *= n;
                return pt[t] = e, e
            }), CatmullRom: function (t, e, n, i, o) {
                var a = .5 * (n - t), r = .5 * (i - e), s = o * o
                return (2 * e - 2 * n + a + r) * (o * s) + (-3 * e + 3 * n - 2 * a - r) * s + a * o + e
            }
        }
    }
    var dt = {}, ft = {
        draw: function (t, e, n) {
            var i = 'http://huiyan.baidu.com/github/tools/gis-drawing/static/images/direction.png'
            n.arrow && n.arrow.url && (i = n.arrow.url), dt[i] || (dt[i] = null)
            var o = dt[i]
            if (!o) {
                var a = Array.prototype.slice.call(arguments), r = new Image
                return r.onload = function () {
                    dt[i] = r, ft.draw.apply(null, a)
                }, void(r.src = i)
            }
            var s = e instanceof c ? e.get() : e
            t.save()
            for (var h in n) t[h] = n[h];
            for (var l, u, g, p, v, d, f, y = [], m = null, x = 0, _ = s.length; x < _; x++) {
                var w = s[x]
                t.save(), (w.fillStyle || w._fillStyle) && (t.fillStyle = w.fillStyle || w._fillStyle), (w.strokeStyle || w._strokeStyle) && (t.strokeStyle = w.strokeStyle || w._strokeStyle)
                var b = w.geometry.type
                if (t.beginPath(), 'LineString' === b) {
                    for (var k = w.geometry._coordinates || w.geometry.coordinates, S = void 0 !== n.arrow.interval ? n.arrow.interval : 1, L = 0; L < k.length; L += S) {
                        if (k[L] && k[L + 1]) {
                            var M = k[L]
                            if (m && (d = M, f = m, Math.sqrt(Math.pow(d[0] - f[0], 2) + Math.pow(d[1] - f[1], 2)) < 30)) continue
                            t.save()
                            var C = (l = k[L], u = k[L + 1], void 0, void 0, v = void 0, g = u[0] - l[0], p = u[1] - l[1],
                                v = 360 * Math.atan(p / g) / (2 * Math.PI), u[0] < l[0] && (v += 180), v)
                            t.translate(M[0], M[1]),
                                t.rotate(C * Math.PI / 180),
                                t.drawImage(o, -o.width / 2 / 2, -o.height / 2 / 2, o.width / 2, o.height / 2), t.restore(), y.push(M), m = M
                        }
                    }
                }
                t.restore()
            }
            t.restore()
        }
    }
    var yt = function (t, n, i) {
        var o = n instanceof c ? n.get() : n
        t.save(), t.fillStyle = i.fillStyle || 'rgba(0, 0, 0, 0.5)', t.fillRect(0, 0, t.canvas.width, t.canvas.height), i.multiPolygonDraw = function () {
            t.save(), t.clip(), e(t), t.restore()
        }
        for (var a = 0, r = o.length; a < r; a++) t.beginPath(), g.drawDataSet(t, [o[a]], i), t.save(), t.clip(), e(t), t.restore();
        t.restore()
    }, mt = function (t, e, n) {
        var i = e instanceof c ? e.get() : e
        t.save()
        for (var o in n) t[o] = n[o];
        var a = n.offset || { x: 0, y: 0 }, r = [], s = n._size || n.size
        s ? t.font = 'bold ' + s + 'px Arial' : s = 12
        var h = n.textKey || 'text'
        if (n.textAlign || (t.textAlign = 'center'), n.textBaseline || (t.textBaseline = 'middle'), n.avoid) {
            for (var l = 0, u = i.length; l < u; l++) {
                var g = (x = i[l].geometry._coordinates || i[l].geometry.coordinates)[0] + a.x, p = x[1] + a.y,
                    v = i[l][h],
                    d = t.measureText(v).width, f = g - d / 2, y = p - s / 2,
                    m = { sw: { x: f, y: y + s }, ne: { x: f + d, y: y } }
                xt(r, m) || (r.push(m), f += d / 2, y += s / 2, t.fillText(v, f, y))
            }
        } else {
            for (l = 0, u = i.length; l < u; l++) {
                var x
                g = (x = i[l].geometry._coordinates || i[l].geometry.coordinates)[0] + a.x, p = x[1] + a.y, v = i[l][h]
                t.fillText(v, g, p)
            }
        }
        t.restore()
    }

    function xt (t, e) {
        for (var n = 0; n < t.length; n++) if (_t(t[n], e)) return !0
        return !1
    }

    function _t (t, e) {
        var n = Math.min(t.ne.x, e.ne.x), i = Math.min(t.sw.y, e.sw.y), o = Math.max(t.sw.x, e.sw.x),
            a = Math.max(t.ne.y, e.ne.y)
        return n > o && i > a
    }

    var wt = function (t, e, n) {
        var i = e instanceof c ? e.get() : e
        t.fillStyle = 'white', t.textAlign = 'center', t.textBaseline = 'middle'
        for (var o = n.offset || { x: 0, y: 0 }, a = 0, r = i.length; a < r; a++) {
            if (i[a].geometry) {
                var s = i[a].deg || n.deg, h = i[a].icon || n.icon,
                    l = i[a].geometry._coordinates || i[a].geometry.coordinates, u = l[0], g = l[1]
                s && (t.save(), t.translate(u, g), t.rotate(s * Math.PI / 180), t.translate(-u, -g))
                var p = n._width || n.width || h.width, v = n._height || n.height || h.height
                u = u - p / 2 + o.x,
                    g = g - v / 2 + o.y, n.sx && n.sy && n.swidth && n.sheight && n.width && n.height ? t.drawImage(h, n.sx, n.sy,
                    n.swidth, n.sheight, u, g, p, v) : n.width && n.height ? t.drawImage(h, u, g, p, v) : t.drawImage(h, u, g),
                s && t.restore()
            }
        }
    }
    'undefined' != typeof window && requestAnimationFrame(function t (e) {
        requestAnimationFrame(t)
        vt.update(e)
    })
    var bt = function () {
            function t (e, n, i) {
                r(this, t), n instanceof c || (n = new c(n)), this.dataSet = n, this.map = e
            }
            return s(t, [{
                key: 'getDefaultContextConfig', value: function () {
                    return {
                        globalAlpha: 1,
                        globalCompositeOperation: 'source-over',
                        imageSmoothingEnabled: !0,
                        strokeStyle: '#000000',
                        fillStyle: '#000000',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 0,
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        lineWidth: 1,
                        lineCap: 'butt',
                        lineJoin: 'miter',
                        miterLimit: 10,
                        lineDashOffset: 0,
                        font: '10px sans-serif',
                        textAlign: 'start',
                        textBaseline: 'alphabetic'
                    }
                }
            }, {
                key: 'initDataRange', value: function (t) {
                    var e = this
                    if (e.intensity = new d({
                            maxSize: e.options.maxSize,
                            minSize: e.options.minSize,
                            gradient: e.options.gradient,
                            max: e.options.max || this.dataSet.getMax('count')
                        }), e.category = new st(e.options.splitList), e.choropleth = new ht(e.options.splitList), void 0 === e.options.splitList && e.category.generateByDataSet(this.dataSet, e.options.color), void 0 === e.options.splitList) {
                        var n = e.options.min || this.dataSet.getMin('count'),
                            i = e.options.max || this.dataSet.getMax('count')
                        e.choropleth.generateByMinMax(n, i)
                    }
                }
            }, {
                key: 'getLegend', value: function (t) {
                    this.options.draw
                    return 'intensity' == this.options.draw || 'heatmap' == this.options.draw ? this.intensity.getLegend(t) : 'category' == this.options.draw ? this.category.getLegend(t) : void 0
                }
            }, {
                key: 'processData', value: function (t) {
                    var e = this, n = e.options.draw
                    if ('bubble' == n || 'intensity' == n || 'category' == n || 'choropleth' == n || 'simple' == n) {
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i]
                            'bubble' == e.options.draw ? t[i]._size = e.intensity.getSize(o.count) : t[i]._size = void 0
                            var a = '_fillStyle'
                            'LineString' !== t[i].geometry.type && 'stroke' !== e.options.styleType || (a = '_strokeStyle'), 'intensity' == e.options.draw ? t[i][a] = e.intensity.getColor(o.count) : 'category' == e.options.draw ? t[i][a] = e.category.get(o.count) : 'choropleth' == e.options.draw && (t[i][a] = e.choropleth.get(o.count))
                        }
                    }
                }
            }, {
                key: 'isEnabledTime', value: function () {
                    var t = this.options.animation
                    return t && !(!1 === t.enabled)
                }
            }, {
                key: 'argCheck', value: function (t) {
                    'heatmap' == t.draw && t.strokeStyle && console.warn('[heatmap] options.strokeStyle is discard, pleause use options.strength [eg: options.strength = 0.1]')
                }
            }, {
                key: 'drawContext', value: function (t, e, n, i) {
                    // console.log(t, e, n, i,'key')
                    var o = this
                    switch (o.options.draw) {
                        case'heatmap':
                            _.draw(t, e, o.options)
                            break
                        case'grid':
                        case'honeycomb':
                            o.options.offset = {
                                x: i.x,
                                y: i.y
                            }, 'grid' == o.options.draw ? w.draw(t, e, o.options) : b.draw(t, e, o.options)
                            break
                        case'text':
                            mt(t, e, o.options)
                            break
                        case'icon':
                            wt(t, e, o.options)
                            break
                        case'clip':
                            yt(t, e, o.options)
                            break
                        default:
                            'webgl' == o.options.context ? ot.draw(o.canvasLayer.canvas.getContext('webgl'), e, o.options) : p.draw(t, e, o.options)
                    }
                    o.options.arrow && !1 !== o.options.arrow.show && ft.draw(t, e, o.options)
                }
            }, {
                /*
                *   点击数据出现
                * */
                key: 'isPointInPath', value: function(t, e) {
                    t = this.canvasLayer.canvas.getContext(this.context)
                    // console.log(t,e,'isPointInPath--t--e')
                    for (var n = this.dataSet.get(), i = 0; i < n.length; i++) {
                        t.beginPath(),
                            g.draw(t, n[i], this.options)
                        var o = e.x * this.canvasLayer.devicePixelRatio,
                            a = e.y * this.canvasLayer.devicePixelRatio
                        // console.log(o,a,'isPointInPath=o-a')
                        // console.log(n[i].geometry,n[i].geometry.type,'n[i].geometry---type')
                        // console.log(t.isPointInPath(o, a),'t.isPointInPath(o, a)')
                        if ((n[i].geometry && n[i].geometry.type).indexOf('LineString') > -1) {
                            if(t.isPointInStroke && t.isPointInStroke(o, a)) {
                                return n[i]
                            }
                        } else if (t.isPointInPath(o, a)) {
                            // console.log(n[i], 'n[i]')
                            return n[i]
                        }
                    }
                }
            }, {
                /*
                *   点击判断
                * */
                key: 'clickEvent', value: function(t, e, i) {
                    if (this.options.methods) {
                        var n = this.isPointInPath(this.getContext(), t)
                        n ? this.options.methods.click(n, e) : this.options.methods.click(null, e)
                    }
                }
            }, {
                key: 'mousemoveEvent', value: function (t, e) {
                    if (this.options.methods) {
                        var n = this.isPointInPath(this.getContext(), t)
                        n ? this.options.methods.mousemove(n, e) : this.options.methods.mousemove(null, e)
                    }
                }
            }, {
                key: 'update', value: function (t, e) {
                    var n = t.options, i = this.options
                    for (var o in n) i[o] = n[o];
                    this.init(i), !1 !== e && this.draw()
                }
            }, {
                key: 'setOptions', value: function (t) {
                    this.dataSet.reset(), this.init(t), this.draw()
                }
            }, {
                key: 'set', value: function (t) {
                    var e = this.getContext(), n = this.getDefaultContextConfig()
                    for (var i in n) e[i] = n[i];
                    this.init(t.options), this.draw()
                }
            }, {
                key: 'destroy', value: function () {
                    this.unbindEvent(), this.hide()
                }
            }, {
                key: 'initAnimator', value: function () {
                    var t = this, e = t.options.animation
                    if ('time' == t.options.draw || t.isEnabledTime()) {
                        e.stepsRange || (e.stepsRange = {
                            start: this.dataSet.getMin('time') || 0,
                            end: this.dataSet.getMax('time') || 0
                        }), this.steps = { step: e.stepsRange.start }, t.animator = new vt.Tween(this.steps).onUpdate(function () {
                            t._canvasUpdate(this.step)
                        }).repeat(1 / 0), this.addAnimatorEvent()
                        var n = 1e3 * e.duration || 5e3
                        t.animator.to({ step: e.stepsRange.end }, n), t.animator.start()
                    } else {
                        t.animator && t.animator.stop()
                    }
                }
            }, {
                key: 'addAnimatorEvent', value: function () {
                }
            }, {
                key: 'animatorMovestartEvent', value: function () {
                    var t = this.options.animation
                    this.isEnabledTime() && this.animator && (this.steps.step = t.stepsRange.start, this.animator.stop())
                }
            }, {
                key: 'animatorMoveendEvent', value: function () {
                    this.isEnabledTime() && this.animator && this.animator.start()
                }
            }]), t
        }(), kt = function (t) {
            function n (t, e, i) {
                r(this, n)
                var o = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e, i))
                o.map = t, o.options = i || {}, o.dataSet = e
                var a = new ut({ map: t, zIndex: o.options.zIndex, update: o._canvasUpdate.bind(o) })
                o.init(o.options), o.canvasLayer = a, o.transferToMercator()
                var s = o
                return e.on('change', function () {
                    s.transferToMercator(), a.draw()
                }), o.ctx = a.canvas.getContext('2d'), o.start(), o
            }
            return l(n, bt), s(n, [{
                key: 'draw', value: function() {
                    this.canvasLayer.draw()
                }
            }, {
                key: 'init', value: function (t) {
                    var e = this
                    e.options = t, this.initDataRange(t), this.context = e.options.context || '2d', e.options.zIndex && this.canvasLayer && this.canvasLayer.setZIndex(e.options.zIndex), e.options.max && this.intensity.setMax(e.options.max), e.options.min && this.intensity.setMin(e.options.min), this.initAnimator()
                }
            }, {
                key: 'transferToMercator', value: function () {
                    var t = this.map.getMapType().getProjection()
                    if ('bd09mc' !== this.options.coordType) {
                        var e = this.dataSet.get()
                        e = this.dataSet.transferCoordinate(e, function (e) {
                            var n = t.lngLatToPoint({ lng: e[0], lat: e[1] })
                            return [n.x, n.y]
                        }, 'coordinates', 'coordinates_mercator'), this.dataSet._set(e)
                    }
                }
            }, {
                key: '_canvasUpdate', value: function() {
                    var t = this.ctx
                    if (t) {
                        var n = this.map, i = Math.pow(2, 18 - n.getZoom()),
                            o = n.getMapType().getProjection().lngLatToPoint(n.getCenter()),
                            a = new BMap.Pixel(o.x - n.getSize().width / 2 * i, o.y + n.getSize().height / 2 * i)
                        e(t)
                        var r = {
                            fromColumn: 'bd09mc' == this.options.coordType ? 'coordinates' : 'coordinates_mercator',
                            transferCoordinate: function (t) {
                                if (t) return [(t[0] - a.x) / i, (a.y - t[1]) / i]
                            }
                        }
                        this.data = this.dataSet.get(r), this.processData(this.data), this.drawAnimation()
                    }
                }
            }, {
                key: 'drawAnimation', value: function () {
                    var t = this.ctx, e = this.data
                    if (e) {
                        t.save(), t.globalCompositeOperation = 'destination-out', t.fillStyle = 'rgba(0, 0, 0, .1)', t.fillRect(0, 0, t.canvas.width, t.canvas.height), t.restore(), t.save(), this.options.shadowColor && (t.shadowColor = this.options.shadowColor), this.options.shadowBlur && (t.shadowBlur = this.options.shadowBlur), this.options.globalAlpha && (t.globalAlpha = this.options.globalAlpha), this.options.globalCompositeOperation && (t.globalCompositeOperation = this.options.globalCompositeOperation)
                        for (var n = this.options, i = 0; i < e.length; i++) {
                            if ('Point' === e[i].geometry.type) {
                                t.beginPath()
                                var o = e[i].size || this.options.size, a = e[i].minSize || this.options.minSize || 0
                                void 0 === e[i]._size && (e[i]._size = a), t.arc(e[i].geometry._coordinates[0], e[i].geometry._coordinates[1], e[i]._size, 0, 2 * Math.PI, !0), t.closePath(), e[i]._size++, e[i]._size > o && (e[i]._size = a), t.lineWidth = 1, t.strokeStyle = e[i].strokeStyle || e[i]._strokeStyle || n.strokeStyle || 'yellow', t.stroke(), (l = e[i].fillStyle || e[i]._fillStyle || n.fillStyle) && (t.fillStyle = l, t.fill())
                            } else if ('LineString' === e[i].geometry.type) {
                                t.beginPath()
                                var r = e[i].size || this.options.size || 5
                                a = e[i].minSize || this.options.minSize || 0
                                void 0 === e[i]._index && (e[i]._index = 0)
                                var s = e[i]._index
                                t.arc(e[i].geometry._coordinates[s][0], e[i].geometry._coordinates[s][1], r, 0, 2 * Math.PI, !0), t.closePath(), e[i]._index++, e[i]._index >= e[i].geometry._coordinates.length && (e[i]._index = 0)
                                var h = e[i].strokeStyle || n.strokeStyle, l = e[i].fillStyle || n.fillStyle || 'yellow'
                                t.fillStyle = l, t.fill(), h && n.lineWidth && (t.lineWidth = n.lineWidth || 1, t.strokeStyle = h, t.stroke())
                            }
                        }
                        t.restore()
                    }
                }
            }, {
                key: 'animate', value: function() {
                    this.drawAnimation()
                    var t = this.options.animateTime || 100
                    this.timeout = setTimeout(this.animate.bind(this), t)
                }
            }, {
                key: 'start', value: function () {
                    this.stop(), this.animate()
                }
            }, {
                key: 'stop', value: function () {
                    clearTimeout(this.timeout)
                }
            }, {
                key: 'unbindEvent', value: function () {
                }
            }, {
                key: 'hide', value: function () {
                    this.canvasLayer.hide(), this.stop()
                }
            }, {
                key: 'show', value: function () {
                    this.start()
                }
            }]), n
        }(),
        /*
        *   option的点击事件
        * */
        St = function(t) {
            function n(t, e, i) {
                // console.log(t,e,i,'st--t-e-i')
                r(this, n)
                var o = u(this, ( n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e, i)),
                    a = o
                // console.log(o,'o')
                i = i || {},
                    o.clickEvent = o.clickEvent.bind(o),
                    o.mousemoveEvent = o.mousemoveEvent.bind(o),
                    a.init(i),
                    a.argCheck(i),
                    a.transferToMercator()
                var s = o.canvasLayer = new ut({
                    map: t,
                    context: o.context,
                    paneName: i.paneName,
                    mixBlendMode: i.mixBlendMode,
                    enableMassClear: i.enableMassClear,
                    zIndex: i.zIndex,
                    update: function() {
                        a._canvasUpdate()
                    }
                })
                return e.on('change', function() {
                    a.transferToMercator(),
                        s.draw()
                }), o
            }
            return l(n, bt),
                s(n, [{
                    key: 'clickEvent', value: function(t) {
                        var e = t.pixel
                        // e.x = e.x + 1 || e.x - 1
                        // e.y = e.y + 1 || e.x - 1
                        h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'clickEvent', this).call(this, e, t)

                    }
                }, {
                    key: 'mousemoveEvent', value: function (t) {
                        var e = t.pixel
                        h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'mousemoveEvent', this).call(this, e, t)
                    }
                }, {
                    key: 'bindEvent', value: function (t) {
                        this.unbindEvent()
                        var e = this.map
                        this.options.methods && (this.options.methods.click && (e.setDefaultCursor('default'),
                            e.addEventListener('click', this.clickEvent)),
                        this.options.methods.mousemove && e.addEventListener('mousemove', this.mousemoveEvent))
                    }
                }, {
                    key: 'unbindEvent', value: function (t) {
                        var e = this.map
                        this.options.methods && (this.options.methods.click && e.removeEventListener('click', this.clickEvent),
                        this.options.methods.mousemove && e.removeEventListener('mousemove', this.mousemoveEvent))
                    }
                }, {
                    key: 'transferToMercator', value: function () {
                        var t = this.map.getMapType().getProjection()
                        if ('bd09mc' !== this.options.coordType) {
                            var e = this.dataSet.get()
                            e = this.dataSet.transferCoordinate(e, function (e) {
                                if (e[0] < -180 || e[0] > 180 || e[1] < -90 || e[1] > 90) return e
                                var n = t.lngLatToPoint({ lng: e[0], lat: e[1] })
                                return [n.x, n.y]
                            }, 'coordinates', 'coordinates_mercator'), this.dataSet._set(e)
                        }
                    }
                }, {
                    key: 'getContext', value: function () {
                        return this.canvasLayer.canvas.getContext(this.context)
                    }
                }, {
                    key: '_canvasUpdate', value: function (t) {
                        if (this.canvasLayer) {
                            var n = this,
                                i = n.options.animation,
                                o = this.canvasLayer._map, a = Math.pow(2, 18 - o.getZoom()),
                                r = o.getMapType().getProjection().lngLatToPoint(o.getCenter()),
                                s = new BMap.Pixel(r.x - o.getSize().width / 2 * a, r.y + o.getSize().height / 2 * a),
                                h = this.getContext()
                            // console.log(o.getZoom(), 'o.getZoom()')
                            // 存贮zoom等级
                            localStorage.setItem('zoom', o.getZoom())
                            if (n.isEnabledTime()) {
                                if (void 0 === t) return void e(h)
                                '2d' == this.context && (h.save(), h.globalCompositeOperation = 'destination-out', h.fillStyle = 'rgba(0, 0, 0, .1)', h.fillRect(0, 0, h.canvas.width, h.canvas.height), h.restore())
                            } else {
                                e(h)
                            }
                            if ('2d' == this.context) for (var l in n.options) h[l] = n.options[l]; else h.clear(h.COLOR_BUFFER_BIT)
                            if (!(n.options.minZoom && o.getZoom() < n.options.minZoom || n.options.maxZoom && o.getZoom() > n.options.maxZoom)) {
                                var u = 1
                                '2d' != this.context && (u = this.canvasLayer.devicePixelRatio)
                                var c = {
                                    fromColumn: 'bd09mc' == n.options.coordType ? 'coordinates' : 'coordinates_mercator',
                                    transferCoordinate: function(t) {
                                        return [(t[0] - s.x) / a * u, (s.y - t[1]) / a * u]
                                    }
                                }
                                void 0 !== t && (c.filter = function (e) {
                                    var n = i.trails || 10
                                    return !!(t && e.time > t - n && e.time < t)
                                })
                                var g = n.dataSet.get(c)
                                this.processData(g)
                                var p = o.pointToPixel(new BMap.Point(0, 0))
                                var _size = ''
                                var zoom = o.getZoom()
                                if (zoom > 17) {
                                    _size = 8
                                } else if (17 >= zoom && zoom > 16) {
                                    _size = 7
                                } else if (16 >= zoom && zoom > 15) {
                                    _size = 6
                                } else if (15 >= zoom && zoom > 14) {
                                    _size = 5
                                } else if (14 >= zoom && zoom > 13) {
                                    _size = 4
                                } else if (13 >= zoom && zoom >= 12) {
                                    _size = 4
                                } else {
                                    _size = 2
                                }
                                // "m" == n.options.unit ? (n.options.size && (n.options._size = n.options.size / a),
                                'm' == n.options.unit ? (n.options.size && (n.options._size = _size),
                                n.options.width && (n.options._width = n.options.width / a),
                                n.options.height && (n.options._height = n.options.height / a)) : (n.options._size = n.options.size,
                                    n.options._height = n.options.height,
                                    n.options._width = n.options.width),
                                    this.drawContext(h, g, n.options, p),
                                n.options.updateCallback && n.options.updateCallback(t)
                            }
                        }
                    }
                }, {
                    key: 'init', value: function (t) {
                        var e = this
                        e.options = t,
                            this.initDataRange(t),
                            this.context = e.options.context || '2d',
                        e.options.zIndex && this.canvasLayer && this.canvasLayer.setZIndex(e.options.zIndex),
                        e.options.max && this.intensity.setMax(e.options.max),
                        e.options.min && this.intensity.setMin(e.options.min),
                            this.initAnimator(), this.bindEvent()
                    }
                }, {
                    key: 'addAnimatorEvent', value: function () {
                        this.map.addEventListener('movestart', this.animatorMovestartEvent.bind(this)), this.map.addEventListener('moveend', this.animatorMoveendEvent.bind(this))
                    }
                }, {
                    key: 'show', value: function () {
                        this.map.addOverlay(this.canvasLayer)
                    }
                }, {
                    key: 'hide', value: function () {
                        this.map.removeOverlay(this.canvasLayer)
                    }
                }, {
                    key: 'draw', value: function () {
                        this.canvasLayer.draw()
                    }
                }]), n
        }()

    function Lt (t) {
        this.isAdded_ = !1, this.isAnimated_ = !1, this.paneName_ = Lt.DEFAULT_PANE_NAME_, this.updateHandler_ = null, this.resizeHandler_ = null, this.topLeft_ = null, this.centerListener_ = null, this.resizeListener_ = null, this.needsResize_ = !0, this.requestAnimationFrameId_ = null
        var e = document.createElement('canvas')

        function n (t, e) {
            return function () {
                e.apply(t)
            }
        }

        e.style.position = 'absolute', e.style.top = 0, e.style.left = 0, e.style.pointerEvents = 'none', this.canvas = e, this.canvasCssWidth_ = 300, this.canvasCssHeight_ = 150, this.resolutionScale_ = 1, this.repositionFunction_ = n(this, this.repositionCanvas_), this.resizeFunction_ = n(this, this.resize_), this.requestUpdateFunction_ = n(this, this.update_), t && this.setOptions(t)
    }

    var Mt = 'undefined' == typeof window ? {} : window
    Mt.google && Mt.google.maps && (Lt.prototype = new google.maps.OverlayView, Lt.DEFAULT_PANE_NAME_ = 'overlayLayer', Lt.CSS_TRANSFORM_ = function () {
        for (var t = document.createElement('div'), e = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'], n = 0; n < e.length; n++) {
            var i = e[n]
            if (void 0 !== t.style[i]) return i
        }
        return e[0]
    }(), Lt.prototype.requestAnimFrame_ = Mt.requestAnimationFrame || Mt.webkitRequestAnimationFrame || Mt.mozRequestAnimationFrame || Mt.oRequestAnimationFrame || Mt.msRequestAnimationFrame || function (t) {
        return Mt.setTimeout(t, 1e3 / 60)
    }, Lt.prototype.cancelAnimFrame_ = Mt.cancelAnimationFrame || Mt.webkitCancelAnimationFrame || Mt.mozCancelAnimationFrame || Mt.oCancelAnimationFrame || Mt.msCancelAnimationFrame || function (t) {
    }, Lt.prototype.setOptions = function (t) {
        void 0 !== t.animate && this.setAnimate(t.animate), void 0 !== t.paneName && this.setPaneName(t.paneName), void 0 !== t.updateHandler && this.setUpdateHandler(t.updateHandler), void 0 !== t.resizeHandler && this.setResizeHandler(t.resizeHandler), void 0 !== t.resolutionScale && this.setResolutionScale(t.resolutionScale), void 0 !== t.map && this.setMap(t.map)
    }, Lt.prototype.setAnimate = function (t) {
        this.isAnimated_ = !!t, this.isAnimated_ && this.scheduleUpdate()
    }, Lt.prototype.isAnimated = function () {
        return this.isAnimated_
    }, Lt.prototype.setPaneName = function (t) {
        this.paneName_ = t, this.setPane_()
    }, Lt.prototype.getPaneName = function () {
        return this.paneName_
    }, Lt.prototype.setPane_ = function () {
        if (this.isAdded_) {
            var t = this.getPanes()
            if (!t[this.paneName_]) throw new Error('"' + this.paneName_ + '" is not a valid MapPane name.')
            t[this.paneName_].appendChild(this.canvas)
        }
    }, Lt.prototype.setResizeHandler = function (t) {
        this.resizeHandler_ = t
    }, Lt.prototype.setResolutionScale = function (t) {
        'number' == typeof t && (this.resolutionScale_ = t, this.resize_())
    }, Lt.prototype.setUpdateHandler = function (t) {
        this.updateHandler_ = t
    }, Lt.prototype.onAdd = function () {
        this.isAdded_ || (this.isAdded_ = !0, this.setPane_(), this.resizeListener_ = google.maps.event.addListener(this.getMap(), 'resize', this.resizeFunction_), this.centerListener_ = google.maps.event.addListener(this.getMap(), 'center_changed', this.repositionFunction_), this.resize_(), this.repositionCanvas_())
    }, Lt.prototype.onRemove = function () {
        this.isAdded_ && (this.isAdded_ = !1, this.topLeft_ = null, this.canvas.parentElement.removeChild(this.canvas), this.centerListener_ && (google.maps.event.removeListener(this.centerListener_), this.centerListener_ = null), this.resizeListener_ && (google.maps.event.removeListener(this.resizeListener_), this.resizeListener_ = null), this.requestAnimationFrameId_ && (this.cancelAnimFrame_.call(Mt, this.requestAnimationFrameId_), this.requestAnimationFrameId_ = null))
    }, Lt.prototype.resize_ = function () {
        if (this.isAdded_) {
            var t = this.getMap(), e = t.getDiv().offsetWidth, n = t.getDiv().offsetHeight,
                i = e * this.resolutionScale_, o = n * this.resolutionScale_, a = this.canvas.width,
                r = this.canvas.height
            a === i && r === o || (this.canvas.width = i, this.canvas.height = o, this.needsResize_ = !0, this.scheduleUpdate()), this.canvasCssWidth_ === e && this.canvasCssHeight_ === n || (this.canvasCssWidth_ = e, this.canvasCssHeight_ = n, this.canvas.style.width = e + 'px', this.canvas.style.height = n + 'px')
        }
    }, Lt.prototype.draw = function () {
        this.repositionCanvas_()
    }, Lt.prototype.repositionCanvas_ = function () {
        var t = this.getMap(), e = t.getBounds().getNorthEast().lat(), n = t.getCenter(), i = Math.pow(2, t.getZoom()),
            o = n.lng() - 180 * this.canvasCssWidth_ / (256 * i)
        this.topLeft_ = new google.maps.LatLng(e, o)
        var a = this.getProjection().fromLatLngToDivPixel(n), r = -Math.round(this.canvasCssWidth_ / 2 - a.x),
            s = -Math.round(this.canvasCssHeight_ / 2 - a.y)
        this.canvas.style[Lt.CSS_TRANSFORM_] = 'translate(' + r + 'px,' + s + 'px)', this.scheduleUpdate()
    }, Lt.prototype.update_ = function () {
        this.requestAnimationFrameId_ = null, this.isAdded_ && (this.isAnimated_ && this.scheduleUpdate(), this.needsResize_ && this.resizeHandler_ && (this.needsResize_ = !1, this.resizeHandler_()), this.updateHandler_ && this.updateHandler_())
    }, Lt.prototype.getTopLeft = function () {
        return this.topLeft_
    }, Lt.prototype.scheduleUpdate = function () {
        this.isAdded_ && !this.requestAnimationFrameId_ && (this.requestAnimationFrameId_ = this.requestAnimFrame_.call(Mt, this.requestUpdateFunction_))
    })
    var Ct = function (t) {
        function n (t, e, i) {
            r(this, n)
            var o = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e, i)), a = o
            i = i || {}, a.init(i), a.argCheck(i)
            var s = {
                map: t, animate: !1, updateHandler: function () {
                    a._canvasUpdate()
                }, resolutionScale: resolutionScale
            }
            o.canvasLayer = new Lt(s)
            return o.clickEvent = o.clickEvent.bind(o), o.mousemoveEvent = o.mousemoveEvent.bind(o), o.bindEvent(), o
        }

        return l(n, bt), s(n, [{
            key: 'clickEvent', value: function (t) {
                var e = t.pixel
                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'clickEvent', this).call(this, e, t)
            }
        }, {
            key: 'mousemoveEvent', value: function (t) {
                var e = t.pixel
                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'mousemoveEvent', this).call(this, e, t)
            }
        }, {
            key: 'bindEvent', value: function (t) {
                var e = this.map
                this.options.methods && (this.options.methods.click && (e.setDefaultCursor('default'), e.addListener('click', this.clickEvent)), this.options.methods.mousemove && e.addListener('mousemove', this.mousemoveEvent))
            }
        }, {
            key: 'unbindEvent', value: function (t) {
                var e = this.map
                this.options.methods && (this.options.methods.click && e.removeListener('click', this.clickEvent), this.options.methods.mousemove && e.removeListener('mousemove', this.mousemoveEvent))
            }
        }, {
            key: 'getContext', value: function () {
                return this.canvasLayer.canvas.getContext(this.context)
            }
        }, {
            key: '_canvasUpdate', value: function (t) {
                if (this.canvasLayer) {
                    var n = this, i = n.options.animation, o = this.getContext()
                    if (n.isEnabledTime()) {
                        if (void 0 === t) return void e(o)
                        '2d' == this.context && (o.save(), o.globalCompositeOperation = 'destination-out', o.fillStyle = 'rgba(0, 0, 0, .1)', o.fillRect(0, 0, o.canvas.width, o.canvas.height), o.restore())
                    } else {
                        e(o)
                    }
                    if ('2d' == this.context) for (var a in n.options) o[a] = n.options[a]; else o.clear(o.COLOR_BUFFER_BIT)
                    if (!(n.options.minZoom && s.getZoom() < n.options.minZoom || n.options.maxZoom && s.getZoom() > n.options.maxZoom)) {
                        var r = 1
                        '2d' != this.context && (r = this.canvasLayer.devicePixelRatio)
                        var s = this.map, h = s.getProjection(),
                            l = (r = Math.pow(2, s.zoom) * resolutionScale, h.fromLatLngToPoint(this.canvasLayer.getTopLeft())),
                            u = {
                                transferCoordinate: function (t) {
                                    var e = new google.maps.LatLng(t[1], t[0]), n = h.fromLatLngToPoint(e),
                                        i = { x: (n.x - l.x) * r, y: (n.y - l.y) * r }
                                    return [i.x, i.y]
                                }
                            }
                        void 0 !== t && (u.filter = function (e) {
                            var n = i.trails || 10
                            return !!(t && e.time > t - n && e.time < t)
                        })
                        var g = n.dataSet.get(u)
                        this.processData(g)
                        var p = new google.maps.LatLng(0, 0), v = h.fromLatLngToPoint(p),
                            d = { x: (v.x - l.x) * r, y: (v.y - l.y) * r }
                        'm' == n.options.unit && n.options.size ? n.options._size = n.options.size / zoomUnit : n.options._size = n.options.size,
                            this.drawContext(o, new c(g), n.options, d),
                        n.options.updateCallback && n.options.updateCallback(t)
                    }
                }
            }
        }, {
            key: 'init', value: function (t) {
                this.options = t, this.initDataRange(t), this.context = this.options.context || '2d', this.options.zIndex && this.canvasLayer && this.canvasLayer.setZIndex(this.options.zIndex), this.initAnimator()
            }
        }, {
            key: 'addAnimatorEvent', value: function () {
                this.map.addListener('movestart', this.animatorMovestartEvent.bind(this)), this.map.addListener('moveend', this.animatorMoveendEvent.bind(this))
            }
        }, {
            key: 'show', value: function () {
                this.map.addOverlay(this.canvasLayer)
            }
        }, {
            key: 'hide', value: function () {
                this.map.removeOverlay(this.canvasLayer)
            }
        }, {
            key: 'draw', value: function () {
                self.canvasLayer.draw()
            }
        }]), n
    }(), Et = void 0
    if ('undefined' != typeof maptalks) {
        Et = function (t) {
            function e (t, n, i) {
                r(this, e)
                var o = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i))
                return o.options_ = i, o.dataSet = n, o._initBaseLayer(i), o
            }

            return l(e, t), s(e, [{
                key: '_initBaseLayer', value: function (t) {
                    var e = this.baseLayer = new bt(null, this.dataSet, t)
                    this.init(t), e.argCheck(t)
                }
            }, {
                key: 'clickEvent', value: function (t) {
                    if (this.baseLayer) {
                        var e = t.containerPoint
                        this.baseLayer.clickEvent(e, t.domEvent)
                    }
                }
            }, {
                key: 'mousemoveEvent', value: function (t) {
                    if (this.baseLayer) {
                        var e = t.containerPoint
                        this.baseLayer.mousemoveEvent(e, t.domEvent)
                    }
                }
            }, {
                key: 'getEvents', value: function () {
                    return { click: this.clickEvent, mousemove: this.mousemoveEvent }
                }
            }, {
                key: 'init', value: function (t) {
                    var e = this.baseLayer
                    e.options = t, e.initDataRange(t), e.context = e.options.context || '2d', e.initAnimator()
                }
            }, {
                key: 'addAnimatorEvent', value: function () {
                    this.map.addListener('movestart', this.animatorMovestartEvent.bind(this)), this.map.addListener('moveend', this.animatorMoveendEvent.bind(this))
                }
            }]), e
        }(maptalks.Layer)
        var Pt = function (t) {
            function n () {
                return r(this, n), u(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
            }

            return l(n, t), s(n, [{
                key: 'needToRedraw', value: function () {
                    return !!this.layer.baseLayer.isEnabledTime() || h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'needToRedraw', this).call(this)
                }
            }, {
                key: 'draw', value: function () {
                    var t = this.layer.baseLayer
                    this.canvas && t.isEnabledTime() && !this._shouldClear || (this.prepareCanvas(), this._shouldClear = !1), this._update(this.gl || this.context, this._mapvFrameTime), delete this._mapvFrameTime, this.completeRender()
                }
            }, {
                key: 'drawOnInteracting', value: function () {
                    this.draw(), this._shouldClear = !1
                }
            }, {
                key: 'onSkipDrawOnInteracting', value: function () {
                    this._shouldClear = !0
                }
            }, {
                key: '_canvasUpdate', value: function (t) {
                    this.setToRedraw(), this._mapvFrameTime = t
                }
            }, {
                key: '_update', value: function (t, n) {
                    if (this.canvas) {
                        var i = this.layer.baseLayer, o = i.options.animation, a = this.getMap()
                        if (i.isEnabledTime()) {
                            if (void 0 === n) return void e(t)
                            '2d' == i.context && (t.save(), t.globalCompositeOperation = 'destination-out', t.fillStyle = 'rgba(0, 0, 0, .1)', t.fillRect(0, 0, t.canvas.width, t.canvas.height), t.restore())
                        } else {
                            e(t)
                        }
                        if ('2d' == i.context) for (var r in i.options) t[r] = i.options[r]; else t.clear(t.COLOR_BUFFER_BIT)
                        var s = 1
                        '2d' === i.context && 'heatmap' !== i.options.draw && (s = i.canvasLayer.devicePixelRatio)
                        var h = new maptalks.Coordinate(0, 0), l = {
                            fromColumn: 'bd09mc' === i.options.coordType ? 'coordinates_mercator' : 'coordinates',
                            transferCoordinate: function (t) {
                                return h.x = t[0], h.y = t[1], a.coordToContainerPoint(h)._multi(s).toArray()
                            }
                        }
                        void 0 !== n && (l.filter = function (t) {
                            var e = o.trails || 10
                            return !!(n && t.time > n - e && t.time < n)
                        })
                        var u = i.dataSet.get(l)
                        i.processData(u),
                            'm' == i.options.unit ? (i.options.size && (i.options._size = i.options.size / zoomUnit),
                            i.options.width && (i.options._width = i.options.width / zoomUnit),
                            i.options.height && (i.options._height = i.options.height / zoomUnit)) : (i.options._size = i.options.size,
                                i.options._height = i.options.height,
                                i.options._width = i.options.width)
                        var c = new maptalks.Point(0, 0),
                            g = a._pointToContainerPoint(c)._multi(s)
                        i.drawContext(t, u, i.options, g),
                        i.options.updateCallback && i.options.updateCallback(n)
                    }
                }
            }, {
                key: 'createCanvas', value: function () {
                    if (!this.canvas) {
                        var t = this.getMap(), e = t.getSize(), n = maptalks.Browser.retina ? 2 : 1, i = n * e.width,
                            o = n * e.height
                        if (this.canvas = maptalks.Canvas.createCanvas(i, o, t.CanvasClass), '2d' === this.layer.baseLayer.context) {
                            this.context = this.canvas.getContext('2d'), this.layer.options.globalCompositeOperation && (this.context.globalCompositeOperation = this.layer.options.globalCompositeOperation)
                        } else {
                            this.gl = this.canvas.getContext('webgl', {
                                alpha: !0,
                                preserveDrawingBuffer: !0,
                                antialias: !1
                            })
                        }
                        this.onCanvasCreate(), this._bindToMapv(), this.layer.fire('canvascreate', {
                            context: this.context,
                            gl: this.gl
                        })
                    }
                }
            }, {
                key: '_bindToMapv', value: function () {
                    var t = this.layer.baseLayer
                    this.devicePixelRatio = maptalks.Browser.retina ? 2 : 1, t.canvasLayer = this, t._canvasUpdate = this._canvasUpdate.bind(this), t.getContext = function () {
                        var t = self.getRenderer()
                        return t.gl || t.context
                    }
                }
            }]), n
        }(maptalks.renderer.CanvasRenderer)
        Et.registerRenderer('canvas', Pt)
    }
    var At = Et, zt = function (t) {
        function n () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = arguments[1],
                i = arguments[2]
            r(this, n)
            var o = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e, i))
            return o.options = i, o.canvasLayer = {
                canvas: null,
                devicePixelRatio: window.devicePixelRatio
            }, o.layer_ = null, o.initDataRange(i), o.initAnimator(), o.onEvents(), t.on('complete', function () {
                this.init(t, i), this.argCheck(i)
            }, o), o
        }

        return l(n, bt), s(n, [{
            key: 'init', value: function (t, e) {
                if (!t) throw new Error('not map object')
                this.map = t, this.context = this.options.context || '2d', this.getCanvasLayer()
            }
        }, {
            key: '_canvasUpdate', value: function (t) {
                this.render(this.canvasLayer.canvas, t)
            }
        }, {
            key: 'render', value: function (t, n) {
                if (t) {
                    var i = this.map, o = t.getContext(this.context), a = this.options.animation
                    if (this.isEnabledTime()) {
                        if (void 0 === n) return e(o), this
                        '2d' === this.context && (o.save(), o.globalCompositeOperation = 'destination-out', o.fillStyle = 'rgba(0, 0, 0, .1)', o.fillRect(0, 0, o.canvas.width, o.canvas.height), o.restore())
                    } else {
                        e(o)
                    }
                    if ('2d' === this.context) for (var r in this.options) o[r] = this.options[r]; else o.clear(o.COLOR_BUFFER_BIT)
                    var s = {
                        transferCoordinate: function (t) {
                            var e = i.lngLatToContainer(new AMap.LngLat(t[0], t[1]))
                            return [e.x, e.y]
                        }
                    }
                    void 0 !== n && (s.filter = function (t) {
                        var e = a.trails || 10
                        return !!(n && t.time > n - e && t.time < n)
                    })
                    var h = this.dataSet.get(s)
                    return this.processData(h),
                        'm' === this.options.unit ? (this.options.size && (this.options._size = this.options.size / zoomUnit),
                        this.options.width && (this.options._width = this.options.width / zoomUnit),
                        this.options.height && (this.options._height = this.options.height / zoomUnit)) : (this.options._size = this.options.size,
                            this.options._height = this.options.height, this.options._width = this.options.width), this.drawContext(o, new c(h), this.options, {
                        x: 0,
                        y: 0
                    }), this.options.updateCallback && this.options.updateCallback(n), this
                }
            }
        }, {
            key: 'getCanvasLayer', value: function () {
                if (!this.canvasLayer.canvas && !this.layer_) {
                    var t = this.canvasFunction(), e = this.map.getBounds()
                    this.layer_ = new AMap.CanvasLayer({
                        canvas: t,
                        bounds: this.options.bounds || e,
                        zooms: this.options.zooms || [0, 22]
                    }), this.layer_.setMap(this.map), this.map.on('mapmove', this.canvasFunction, this), this.map.on('zoomchange', this.canvasFunction, this)
                }
            }
        }, {
            key: 'canvasFunction', value: function () {
                var t = [this.map.getSize().width, this.map.getSize().height], e = t[0], n = t[1]
                if (this.canvasLayer.canvas) {
                    this.canvasLayer.canvas.width = e, this.canvasLayer.canvas.height = n
                    var i = this.map.getBounds()
                    this.layer_ && this.layer_.setBounds(this.options.bounds || i)
                } else {
                    this.canvasLayer.canvas = function (t, e, n) {
                        if ('undefined' != typeof document) {
                            var i = document.createElement('canvas')
                            return i.width = t, i.height = e, i
                        }
                        return new n(t, e)
                    }(e, n)
                }
                return this.render(this.canvasLayer.canvas), this.canvasLayer.canvas
            }
        }, {
            key: 'removeLayer', value: function () {
                this.map && (this.unEvents(), this.map.removeLayer(this.layer_), delete this.map, delete this.layer_, delete this.canvasLayer.canvas)
            }
        }, {
            key: 'getContext', value: function () {
                return this.canvasLayer.canvas.getContext(this.context)
            }
        }, {
            key: 'clickEvent', value: function (t) {
                var e = t.pixel
                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'clickEvent', this).call(this, e, t)
            }
        }, {
            key: 'mousemoveEvent', value: function (t) {
                var e = t.pixel
                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'mousemoveEvent', this).call(this, e, t)
            }
        }, {
            key: 'addAnimatorEvent', value: function () {
                this.map.on('movestart', this.animatorMovestartEvent, this), this.map.on('moveend', this.animatorMoveendEvent, this)
            }
        }, {
            key: 'onEvents', value: function () {
                var t = this.map
                this.unEvents(), this.options.methods && (this.options.methods.click && t.on('click', this.clickEvent, this), this.options.methods.mousemove && t.on('mousemove', this.mousemoveEvent, this))
            }
        }, {
            key: 'unEvents', value: function () {
                var t = this.map
                this.options.methods && (this.options.methods.click && t.off('click', this.clickEvent, this), this.options.methods.mousemove && t.off('mousemove', this.mousemoveEvent, this))
            }
        }]), n
    }(), Rt = function (t) {
        function n () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = arguments[1],
                i = arguments[2]
            r(this, n)
            var o = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e, i))
            return o.options = i, o.canvasLayer = {
                canvas: null,
                devicePixelRatio: window.devicePixelRatio
            }, o.layer_ = null, o.previousCursor_ = void 0, o.init(t, i), o.argCheck(i), o
        }

        return l(n, bt), s(n, [{
            key: 'init', value: function (t, e) {
                if (!(t && t instanceof ol.Map)) throw new Error('not map object')
                this.$Map = t, this.context = this.options.context || '2d', this.getCanvasLayer(), this.initDataRange(e), this.initAnimator(), this.onEvents()
            }
        }, {
            key: '_canvasUpdate', value: function (t) {
                this.render(this.canvasLayer.canvas, t)
            }
        }, {
            key: 'render', value: function (t, n) {
                var i = this.$Map, o = t.getContext(this.context), a = this.options.animation,
                    r = this.options.hasOwnProperty('projection') ? this.options.projection : 'EPSG:4326'
                if (this.isEnabledTime()) {
                    if (void 0 === n) return e(o), this
                    '2d' === this.context && (o.save(), o.globalCompositeOperation = 'destination-out', o.fillStyle = 'rgba(0, 0, 0, .1)', o.fillRect(0, 0, o.canvas.width, o.canvas.height), o.restore())
                } else {
                    e(o)
                }
                if ('2d' === this.context) for (var s in this.options) o[s] = this.options[s]; else o.clear(o.COLOR_BUFFER_BIT)
                var h = {
                    transferCoordinate: function (t) {
                        return i.getPixelFromCoordinate(ol.proj.transform(t, r, 'EPSG:4326'))
                    }
                }
                void 0 !== n && (h.filter = function (t) {
                    var e = a.trails || 10
                    return !!(n && t.time > n - e && t.time < n)
                })
                var l = this.dataSet.get(h)
                return this.processData(l),
                    'm' === this.options.unit ? (this.options.size && (this.options._size = this.options.size / zoomUnit),
                    this.options.width && (this.options._width = this.options.width / zoomUnit),
                    this.options.height && (this.options._height = this.options.height / zoomUnit)) : (this.options._size = this.options.size,
                        this.options._height = this.options.height, this.options._width = this.options.width),
                    this.drawContext(o, new c(l), this.options, {
                        x: 0,
                        y: 0
                    }), this.options.updateCallback && this.options.updateCallback(n), this
            }
        }, {
            key: 'getCanvasLayer', value: function () {
                if (!this.canvasLayer.canvas && !this.layer_) {
                    var t = this.getMapExtent()
                    this.layer_ = new ol.layer.Image({
                        layerName: this.options.layerName,
                        minResolution: this.options.minResolution,
                        maxResolution: this.options.maxResolution,
                        zIndex: this.options.zIndex,
                        extent: t,
                        source: new ol.source.ImageCanvas({
                            canvasFunction: this.canvasFunction.bind(this),
                            projection: this.options.hasOwnProperty('projection') ? this.options.projection : 'EPSG:4326',
                            ratio: this.options.hasOwnProperty('ratio') ? this.options.ratio : 1
                        })
                    }), this.$Map.addLayer(this.layer_), this.$Map.un('precompose', this.reRender, this), this.$Map.on('precompose', this.reRender, this)
                }
            }
        }, {
            key: 'reRender', value: function () {
                if (this.layer_) {
                    var t = this.getMapExtent()
                    this.layer_.setExtent(t)
                }
            }
        }, {
            key: 'canvasFunction', value: function (t, e, n, i, o) {
                return this.canvasLayer.canvas ? (this.canvasLayer.canvas.width = i[0], this.canvasLayer.canvas.height = i[1]) : this.canvasLayer.canvas = function (t, e) {
                    if ('undefined' != typeof document) {
                        var n = document.createElement('canvas')
                        return n.width = t, n.height = e, n
                    }
                }(i[0], i[1]), this.render(this.canvasLayer.canvas), this.canvasLayer.canvas
            }
        }, {
            key: 'getMapExtent', value: function () {
                var t = this.$Map.getSize()
                return this.$Map.getView().calculateExtent(t)
            }
        }, {
            key: 'addTo', value: function (t) {
                this.init(t, this.options)
            }
        }, {
            key: 'removeLayer', value: function () {
                this.$Map && (this.unEvents(), this.$Map.un('precompose', this.reRender, this), this.$Map.removeLayer(this.layer_), delete this.$Map, delete this.layer_, delete this.canvasLayer.canvas)
            }
        }, {
            key: 'getContext', value: function () {
                return this.canvasLayer.canvas.getContext(this.context)
            }
        }, {
            key: 'clickEvent', value: function (t) {
                var e = t.pixel
                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'clickEvent', this).call(this, {
                    x: e[0],
                    y: e[1]
                }, t)
            }
        }, {
            key: 'mousemoveEvent', value: function (t) {
                var e = t.pixel
                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'mousemoveEvent', this).call(this, {
                    x: e[0],
                    y: e[1]
                }, t)
            }
        }, {
            key: 'addAnimatorEvent', value: function () {
                this.$Map.on('movestart', this.animatorMovestartEvent, this), this.$Map.on('moveend', this.animatorMoveendEvent, this)
            }
        }, {
            key: 'onEvents', value: function () {
                var t = this.$Map
                this.unEvents(), this.options.methods && (this.options.methods.click && t.on('click', this.clickEvent, this), this.options.methods.mousemove && t.on('pointermove', this.mousemoveEvent, this))
            }
        }, {
            key: 'unEvents', value: function () {
                var t = this.$Map
                this.options.methods && (this.options.methods.click && t.un('click', this.clickEvent, this), this.options.methods.pointermove && t.un('pointermove', this.mousemoveEvent, this))
            }
        }, {
            key: 'setDefaultCursor', value: function (t, e) {
                if (this.$Map) {
                    var n = this.$Map.getTargetElement()
                    e ? n.style.cursor !== t && (this.previousCursor_ = n.style.cursor, n.style.cursor = t) : void 0 !== this.previousCursor_ && (n.style.cursor = this.previousCursor_, this.previousCursor_ = void 0)
                }
            }
        }]), n
    }(), Ot = {
        getDataSet: function (t) {
            var e = [], n = t.features
            if (n) {
                for (var i = 0; i < n.length; i++) {
                    var o = n[i], a = o.geometry, r = o.properties, s = {}
                    for (var h in r) s[h] = r[h];
                    s.geometry = a, e.push(s)
                }
            }
            return new c(e)
        }
    }, Ft = {
        CSVToArray: function (t, e) {
            e = e || ','
            for (var n = new RegExp('(\\' + e + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + e + '\\r\\n]*))', 'gi'), i = [[]], o = null; o = n.exec(t);) {
                var a, r = o[1]
                r.length && r !== e && i.push([]), a = o[2] ? o[2].replace(new RegExp('""', 'g'), '"') : o[3], i[i.length - 1].push(a)
            }
            return i
        }, getDataSet: function (t, e) {
            for (var n = this.CSVToArray(t, e || ','), i = [], o = n[0], a = 1; a < n.length - 1; a++) {
                for (var r = n[a], s = {}, h = 0; h < r.length; h++) {
                    var l = r[h]
                    'geometry' == o[h] && (l = JSON.parse(l)), s[o[h]] = l
                }
                i.push(s)
            }
            return new c(i)
        }
    }
    t.version = '2.0.33', t.canvasClear = e, t.canvasResolutionScale = function (t) {
        var e = window.devicePixelRatio || 1
        t.canvas.width = t.canvas.width * e, t.canvas.height = t.canvas.height * e, t.canvas.style.width = t.canvas.width / e + 'px', t.canvas.style.height = t.canvas.height / e + 'px', t.scale(e, e)
    }, t.canvasDrawSimple = p, t.canvasDrawHeatmap = _, t.canvasDrawGrid = w, t.canvasDrawHoneycomb = b, t.webglDrawSimple = ot, t.webglDrawPoint = R, t.webglDrawLine = E, t.webglDrawPolygon = it, t.utilCityCenter = a, t.utilCurve = rt, t.utilForceEdgeBundling = function () {
        var t = {}, e = [], n = [], i = [], o = .1, a = .1, r = 1, s = 2, h = 6, l = 70, u = .6666667, c = .6, g = 1e-8

        function p (e) {
            return { x: t[e.target].x - t[e.source].x, y: t[e.target].y - t[e.source].y }
        }

        function v (e) {
            return Math.sqrt(Math.pow(t[e.source].x - t[e.target].x, 2) + Math.pow(t[e.source].y - t[e.target].y, 2))
        }

        function d (t) {
            for (var e = 0, n = 1; n < i[t].length; n++) e += f(i[t][n], i[t][n - 1]);
            return e
        }

        function f (t, e) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }

        function y (t, e) {
            var n = Math.sqrt((e.target.x - e.source.x) * (e.target.x - e.source.x) + (e.target.y - e.source.y) * (e.target.y - e.source.y)),
                i = ((e.source.y - t.y) * (e.source.y - e.target.y) - (e.source.x - t.x) * (e.target.x - e.source.x)) / (n * n)
            return { x: e.source.x + i * (e.target.x - e.source.x), y: e.source.y + i * (e.target.y - e.source.y) }
        }

        function m (t, e, o) {
            for (var a, r = { x: 0, y: 0 }, s = n[t], h = 0; h < s.length; h++) {
                var l = { x: i[s[h]][e].x - i[t][e].x, y: i[s[h]][e].y - i[t][e].y }
                if (Math.abs(l.x) > g || Math.abs(l.y) > g) {
                    var u = 1 / Math.pow((a = {
                        source: i[s[h]][e],
                        target: i[t][e]
                    }, Math.sqrt(Math.pow(a.source.x - a.target.x, 2) + Math.pow(a.source.y - a.target.y, 2))), 1)
                    r.x += l.x * u, r.y += l.y * u
                }
            }
            return r
        }

        function x (t, n, a) {
            for (var r, s, h, l, u, c, g, p, d = o / (v(e[t]) * (n + 1)), f = [{ x: 0, y: 0 }], y = 1; y < n + 1; y++) {
                var x = { x: 0, y: 0 },
                    _ = (s = y, h = d, g = void 0, p = void 0, l = i[r = t][s - 1], u = i[r][s + 1], c = i[r][s], g = l.x - c.x + u.x - c.x, p = l.y - c.y + u.y - c.y, {
                        x: g *= h,
                        y: p *= h
                    }), w = m(t, y)
                x.x = a * (_.x + w.x), x.y = a * (_.y + w.y), f.push(x)
            }
            return f.push({ x: 0, y: 0 }), f
        }

        function _ (n) {
            for (var o = 0; o < e.length; o++) {
                if (1 == n) {
                    i[o].push(t[e[o].source]), i[o].push((p = e[o], {
                        x: (t[p.source].x + t[p.target].x) / 2,
                        y: (t[p.source].y + t[p.target].y) / 2
                    })), i[o].push(t[e[o].target])
                } else {
                    var a = d(o) / (n + 1), r = a, s = []
                    s.push(t[e[o].source])
                    for (var h = 1; h < i[o].length; h++) {
                        for (var l = f(i[o][h], i[o][h - 1]); l > r;) {
                            var u = r / l, c = i[o][h - 1].x, g = i[o][h - 1].y
                            c += u * (i[o][h].x - i[o][h - 1].x), g += u * (i[o][h].y - i[o][h - 1].y), s.push({
                                x: c,
                                y: g
                            }), l -= r, r = a
                        }
                        r -= l
                    }
                    s.push(t[e[o].target]), i[o] = s
                }
            }
            var p
        }

        function w (e, n) {
            var i = y(t[n.source], { source: t[e.source], target: t[e.target] }),
                o = y(t[n.target], { source: t[e.source], target: t[e.target] }),
                a = { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 },
                r = { x: (t[e.source].x + t[e.target].x) / 2, y: (t[e.source].y + t[e.target].y) / 2 }
            return Math.max(0, 1 - 2 * f(r, a) / f(i, o))
        }

        function b (e, n) {
            var i, o, a, r, s, h, l, u, c, g, d, y
            return c = e, g = n, Math.abs((d = p(c), y = p(g), (d.x * y.x + d.y * y.y) / (v(c) * v(g)))) * (l = n, 2 / ((u = (v(h = e) + v(l)) / 2) / Math.min(v(h), v(l)) + Math.max(v(h), v(l)) / u)) * (r = n, (s = (v(a = e) + v(r)) / 2) / (s + f({
                x: (t[a.source].x + t[a.target].x) / 2,
                y: (t[a.source].y + t[a.target].y) / 2
            }, {
                x: (t[r.source].x + t[r.target].x) / 2,
                y: (t[r.source].y + t[r.target].y) / 2
            }))) * (i = e, o = n, Math.min(w(i, o), w(o, i)))
        }

        var k = function () {
            var o = a, s = l, g = r
            !function () {
                for (var n = 0; n < e.length; n++) 1 == r ? i[n] = [] : (i[n] = [], i[n].push(t[e[n].source]), i[n].push(t[e[n].target]))
            }(), function () {
                for (var t = 0; t < e.length; t++) n[t] = []
            }(), _(g), function () {
                for (var t = 0; t < e.length - 1; t++) for (var i = t + 1; i < e.length; i++) t != i && (o = e[t], a = e[i], b(o, a) >= c && (n[t].push(i), n[i].push(t)))
                var o, a
            }()
            for (var p = 0; p < h; p++) {
                for (var v = 0; v < s; v++) {
                    for (var d = [], f = 0; f < e.length; f++) d[f] = x(f, g, o);
                    for (var y = 0; y < e.length; y++) for (var m = 0; m < g + 1; m++) i[y][m].x += d[y][m].x, i[y][m].y += d[y][m].y
                }
                o /= 2, s *= u, _(g *= 2)
            }
            return i
        }
        return k.nodes = function (e) {
            return 0 == arguments.length ? t : (t = e, k)
        }, k.edges = function (n) {
            return 0 == arguments.length ? e : (e = function (e) {
                for (var n = [], i = 0; i < e.length; i++) t[e[i].source].x != t[e[i].target].x && t[e[i].source].y != t[e[i].target].y && n.push(e[i]);
                return n
            }(n), k)
        }, k.bundling_stiffness = function (t) {
            return 0 == arguments.length ? o : (o = t, k)
        }, k.step_size = function (t) {
            return 0 == arguments.length ? a : (a = t, k)
        }, k.cycles = function (t) {
            return 0 == arguments.length ? h : (h = t, k)
        }, k.iterations = function (t) {
            return 0 == arguments.length ? l : (l = t, k)
        }, k.iterations_rate = function (t) {
            return 0 == arguments.length ? u : (u = t, k)
        }, k.subdivision_points_seed = function (t) {
            return 0 == arguments.length ? P : (P = t, k)
        }, k.subdivision_rate = function (t) {
            return 0 == arguments.length ? s : (s = t, k)
        }, k.compatbility_threshold = function (t) {
            return 0 == arguments.length ? compatbility_threshold : (c = t, k)
        }, k
    }, t.utilDataRangeIntensity = d, t.utilDataRangeCategory = st, t.utilDataRangeChoropleth = ht, t.Map = lt, t.baiduMapCanvasLayer = ut, t.baiduMapAnimationLayer = kt, t.baiduMapLayer = St, t.googleMapCanvasLayer = Lt, t.googleMapLayer = Ct, t.MaptalksLayer = At, t.AMapLayer = zt, t.OpenlayersLayer = Rt, t.DataSet = c, t.geojson = Ot, t.csv = Ft, Object.defineProperty(t, '__esModule', { value: !0 })
})


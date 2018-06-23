var config = require('../config')
var constant = require('./constant')
var QQMapWX = require('../thirdlib/qqmap-wx-jssdk.min.js');

var qqmapsdk = new QQMapWX({
    key: "LXQBZ-HYIWP-GKSDQ-VILD7-TAE4F-MAF5F" // 必填
});


// 返回res参数
// latitude 
// longitude
// speed
// accuracy
var getLocation = (params) => {
    wx.getLocation({
        type: 'wgs84',
        success: function (res) {
            typeof params.success == "function" && params.success(res);
        },
        fail: function () {
            typeof params.fail == "function" && params.fail();
        },
        // complete: () => {
        //     console.log("getLocation End");
        // }
    })
}

//获取地址
var getAddress = (params) => {
    getLocation({
        success: (res) => {
            qqmapsdk.reverseGeocoder({
                location: {
                    latitude: res.latitude,
                    longitude: res.longitude
                },
                success: (addressRes) => {
                    var address = addressRes.result.formatted_addresses.recommend;
                    typeof params.success == "function" && params.success(address);
                },
                fail: () => {
                    typeof params.fail == "function" && params.fail();
                }
            })
        },
        fail: () => {
            typeof params.fail == "function" && params.fail();
        }
    });
}

module.exports = {
    getLocation: getLocation,
    getAddress: getAddress
}

// wx.getLocation({
//     type: 'wgs84',
//     success: function (res) {
//         var latitude = res.latitude
//         var longitude = res.longitude
//         var speed = res.speed
//         var accuracy = res.accuracy
//     }
// })
componentApp.controller("umsSettingController", ["$scope", "umsUserSettings", function($scope, umsUserSettings){
	/**
	 * 从服务器获取用户设置信息
	 */
	$scope.userDefinedSetting = umsUserSettings;
	
	/**
	 * 保存输入的昵称
	 */
	$scope.changeNickname = function(nickname){
		$scope.userDefinedSetting.nickname = nickname;
	}

	/**
	 * 保存输入的注册次数
	 */
	$scope.changeMostRegisterTimes = function(mostRegisterTimes){
		if(mostRegisterTimes<0 || mostRegisterTimes == undefined || isNaN(mostRegisterTimes)){
			$scope.userDefinedSetting.mostRegisterTimes = 0;
		}else{
			$scope.userDefinedSetting.mostRegisterTimes = mostRegisterTimes;
		}
	}

	/**
	 * 保存微信的AppScret
	 */
	$scope.changeWechatAppscret = function(wechatAppscret){
		$scope.userDefinedSetting.wechatAppScret = wechatAppscret;
	}

	/**
	 * 保存微信的AppID
	 */
	$scope.changeWechatAppID = function(wechatAppID){
		$scope.userDefinedSetting.wechatAppID = wechatAppID;
	}


}]);
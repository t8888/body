<template>
	<div class="main">
		<el-container>
			<el-header height="50px" class="no-print">
				<div class="logo no-print" @click="changeCol">
					<!-- <img src="./../assets/images/logo.png" alt=""> -->
					晨曦领跑
				</div>
				<div class="userInfo no-print">
					<el-menu default-active="1" class="el-menu-demo" mode="horizontal">
						<el-submenu index="1">
							<template slot="title">{{ userName }}</template>
							<!-- <el-menu-item index="1-1" @click="rePassWord()">修改密码</el-menu-item> -->
							<el-menu-item index="1-1" @click="exitAction()">退出登录</el-menu-item>
						</el-submenu>
					</el-menu>
				</div>
			</el-header>
			<el-container>
				<el-menu :default-active="defaultActive" :unique-opened="true" v-loading="loginState" mode="vertical"
					collapse-transition :collapse="isCollapse" class="el-menu-vertical-demo">
					<template v-for="item in navMenuList">
						<el-submenu :key="item.powerVo.id + 1" :index="item.list && item.list.length > 0? item.powerVo.id: 'item-4' + item.powerVo.id " v-if="item.list && item.list.length > 0">
							<template slot="title">
								<i :class="'iconfont ' + item.powerVo.iconName"></i>
								<span>{{ item.powerVo.fname }}</span>
							</template>
							<template v-for="res in item.list">
								<el-submenu :key="res.powerVo.id + 4" v-if="res.list && res.list.length > 0" :index="res.list && res.list.length > 0? res.powerVo.id : 'item-3' + res.powerVo.id">
									<template slot="title">
										<i :class="'iconfont ' + res.powerVo.iconName"></i>
										<span>{{ res.powerVo.fname }}</span>
									</template>
									<el-menu-item v-for="resItem in res.list" :index="resItem.powerVo.id" :key="resItem.powerVo.id + 3" @click="goToPageAction(resItem.powerVo)">
										<i :class="'iconfont ' + resItem.powerVo.iconName"></i>
										<span slot="title">{{ resItem.powerVo.fname }}</span>
									</el-menu-item>
								</el-submenu>
								<el-menu-item v-else :key="res.powerVo.id + 4" :index="!res.list || res.list.length == 0? res.powerVo.id: 'item-2' + res.powerVo.id" @click="goToPageAction(res.powerVo)">
									<i :class="'iconfont ' + res.powerVo.iconName"></i>
									<span slot="title">{{ res.powerVo.fname }}</span>
								</el-menu-item>
							</template>
						</el-submenu>
						<el-menu-item :key="item.powerVo.id + 2" v-else :index="!item.list || item.list.length == 0? item.powerVo.id: 'item-1' + item.powerVo.id" @click="goToPageAction(item.powerVo)">
							<i :class="'iconfont ' + item.powerVo.iconName"></i>
							<span slot="title">{{ item.powerVo.fname }}</span>
						</el-menu-item>
					</template>
				</el-menu>
				<el-container style="width: 100%">
					<el-main>
						<router-view></router-view>
					</el-main>
					<el-footer height="60px" class="b-t no-print">
						<p>西安晨曦领跑信息科技有限公司</p>
						<p>
							<a style="color: #58666e" href="http://www.beian.miit.gov.cn/" target="_blank"
								class="f_txt2">Copyright © cxlpsports.com. All rights reserved |
								陕ICP备19014597号
							</a>
						</p>
					</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import apiAuth from "@/api/auth";
	export default {
		name: "Main",
		data() {
			let uData = this.$util.sessionStorage("get", "userInfo").data;
			return {
				loginState: false,
				msg: "Welcome",
				isCollapse: false,
				defaultActive: "1",
				userName: uData.userInfoVO ?
					uData.userInfoVO.schoolName :
					uData.schoolName,
				navMenuList: [],
			};
		},
		created() {
			let id = window.sessionStorage.getItem("menuDefActinve");
			if (id) {
				this.defaultActive = id;
			}
			this.getMenuList();
		},
		methods: {
			changeCol() {
				this.isCollapse = !this.isCollapse;
			},
			rePassWord() {
				this.$router.push({
					path: "/rePassWord"
				});
			},
			getMenuList() {
				this.loginState = true;
				let _this = this;
				this.$http.post(apiAuth.power(), {}).then((res) => {
					_this.loginState = false;
					if (res) {
						this.navMenuList = this.$util.fnavList(res.data.powerList1, false);
						console.log(this.navMenuList, "====");
					}
				});
			},
			exitAction() {
				this.$util.sessionStorage("remove", "adminuid");
				this.$util.sessionStorage("remove", "userInfo");
				this.$router.push({
					path: "/login"
				});
			},
			goToPageAction(router) {
				this.$util.removeOtherPageSaveData();
				window.sessionStorage.setItem("menuDefActinve", router.id);
				this.$router.push({
					path: router.url
				});
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "./../assets/css/variable.scss";

	.el-menu.el-menu--horizontal {
		border: none;
	}

	.el-menu .el-menu-item:hover,
	.el-menu .el-menu-item.is-active {
		color: #fdb200;
	}

	.el-menu .el-menu-item.is-active {
		color: #fdb200;
		border-right: 5px solid #fdb200;
	}

	.main {
		height: 100%;

		.el-header {
			color: #fff;
			background: #00a9ff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0;
			box-shadow: 0.125rem 0.125rem 0.125rem #fff;

			.logo {
				font-weight: bold;
				font-size: 18px;
				height: 100%;
				background: #009cec;
				line-height: 50px;
				text-align: center;
				width: 200px;

				img {
					width: auto;
					height: 2.8125rem;
				}
			}

			.userInfo {
				.el-menu {
					background: #00a9ff;

					.el-submenu__title {
						color: #fff !important;
					}
				}
			}
		}

		.el-container {
			height: 100%;
		}

		.el-main {
			padding: 0;
			background: #f0f3f4;
		}

		.title {
			color: $minorColor;
			font-size: 0.75rem;
			display: block;
		}

		.el-menu {
			font-weight: bold;
			border-right: 0;
		}

		.el-menu-item {
			height: 2.5rem;
			line-height: 2.5rem;
			font-weight: normal;
			// padding-left: 3.25rem !important;
		}

		.el-submenu [class^="el-icon-"] {
			vertical-align: middle;
			margin-right: 5px;
			width: 24px;
			text-align: center;
			font-size: 18px;
		}

		.el-footer {
			background: $bgGrayColor;
			color: $mainColor;
			font-size: 0.75rem;
			text-align: center;

			p:first-child {
				padding-top: 16px;
			}
		}
	}
</style>

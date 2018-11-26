<template>
	<view class="content">
		<navigator url="../index/index" hover-class="navigator-hover">
			<button type="default">返回</button>
		</navigator>
		<view class="part2">
			<image class="banner-image" :src="data.image"></image>
		</view>
		<scroll-view>
			<rich-text class="richText" :nodes="data.body" style="width: 70%; height: 100%;"></rich-text>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {}
			};
		},
		onLoad:function(e){
			uni.showLoading({
				title: '加载中...',
			});
			uni.request({
				url: 'https://news-at.zhihu.com/api/4/news/'+e.id,
				method: 'GET',
				success: res => {
					console.log(res);
					this.data = res.data;
					this.data.body = res.data.body.replace(/“/g,'"').replace(/”/g,'"');
					uni.hideLoading();
					
				}
			});
		}
	}
</script>

<style>
	.content {
		text-align: center;
		padding: 10upx 2%;
		width: 96%;
		flex-wrap: wrap;
	}

	.title {
		line-height: 2em;
		font-weight: 700;
		font-size: 38upx;
	}
	.richText{
		line-height: 2em;
	}
	
	.part2 {
		width: 100%;
		height: 280px;
		border-bottom: 20px solid #f9f9f9;
		overflow: hidden;
		position: relative;
	}

	.part2:after {
		content: " ";
		height: 20px;
		border-radius: 50%;
		background: #f9f9f9;
		position: absolute;
		bottom: -10px;
		left: -20px;
		right: -20px;
	}

	.banner-image {
		width: 100%;
		height: 100%;
	}
	
	.content-image {
		width: 100%;
		height: 100%;
	}
</style>

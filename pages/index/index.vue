<template>
	<view class="container index">
		<hybrid-popup boxWidth="100%" type="bottom" :show="type==='gopay'" @hidePopup="togglePopup('')">
			<hybrid-spec type="GoBuy" :defaultImg="result.goodsInfo.goods_index_image" :defaultPrice="result.goodsInfo.goods_price"
			 :spec="spec" :skuList="skuList" @GoBuy="_Gobuy"></hybrid-spec>
		</hybrid-popup>
	</view>
</template>

<script>
	import HybridSpec from '@/components/HybridSpec.vue'
	import Specs from './specs.js'
	export default {
		components: {
			HybridSpec
		},
		data() {
			return {
				type: 'gopay',
				result: {
					goodsInfo: {
						images: [],
						goods_index_image: 'https://cdn.tianshic.com/uploads/2019/07/27/bea558114b16003aad3c8e0a3ec1d9b8.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fixed,w_800,h_800/quality,q_90/sharpen,150/format,jpg',
						goods_price: 1000
					},
					shopInfo: {
						shop_name: '官方自营',
					}
				}, //商品详情
				spec: Specs.spec,
				skuList: Specs.skuList
			}
		},
		onLoad() {

		},
		methods: {
			_Gobuy(data){
				console.log(data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		min-height: 100%;
		height: auto;
		background-color: $t-f8;
	}
</style>

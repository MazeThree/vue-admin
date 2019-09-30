<template>
	<div class="asp-section" :style="mainStyle">
		<div class="asp-section__header" :style="headStyle">
			<div class="header-left">
				<i :class="options.icon"></i>
				<span>{{options.title}}</span>
			</div>
			<div class="header-right moreTitle" @mouseout = 'childerMouseout()' @mouseover = 'childerMouseover($event)' v-if="options.hover">
				<span>更多</span>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="header-right moreTitle" v-if="options.more">
				<span>更多</span>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div v-if="options.defined">
				<slot name="header-right"></slot>
			</div>
		</div>
		<div class="asp-section__body" :style="bodyStyle" :class="options.column ? 'column1' : 'row1'">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
  name: 'asp-section',
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    mainStyle: {
      type: Object,
      default: () => {
        return {
          width: '100%'
        }
      }
    },
    bodyStyle: {
      type: Object,
      default: () => {}
    },
    headStyle: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  methods: {
	// @mouseover
	// @mouseout
    childerMouseover ($event) {
      this.$emit('childerMouseover', $event)
    },
    childerMouseout () {
      this.$emit('childerMouseout')
    }
  },
  components: {},
  computed: {},
  mounted () {},
  destroyed () {}
}
</script>
<style lang="scss" scoped>
	.asp-section {
		.asp-section__header {
			width: 100%;
			height: 36px;
			background: url(../../assets/img/table.png);
			background-size: 100% 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 12px;
			.header-left {
				display: flex;
				align-items: center;
				i {
					color: #fff;
					font-size: 24px;
					// height: 20px;
					// line-height: 20.5px;
				}
				span {
					font-size: 16px;
					font-family: MicrosoftYaHei;
					font-weight: bold;
					color: rgba(245, 248, 255, 1);
					margin-left: 7px;
				}
			}
			.header-right {
				display: flex;
				align-items: center;
				padding-right: 10px;
				&.moreTitle:hover {
					span,
					i {
						color: #46bafe;
					}
				}
				i {
					color: rgba(245, 248, 255, 1);
					cursor: pointer;
				}
				span {
					font-size: 14px;
					font-family: MicrosoftYaHei;
					font-weight: 400;
					color: rgba(245, 248, 255, 1);
					cursor: pointer;
				}
			}
		}
		.asp-section__body {
			width: 100%;
			// height:134px;
			background: rgba(5, 0, 92, 0.2);
			// border:1px solid #002eb1;
			border: 1px solid rgba(0, 46, 177, 0.2);
			border-radius: 0px 0px 4px 4px;
			display: flex;
			color: rgba(70, 186, 254, 1);
			&.row1 {
				align-items: center;
				justify-content: space-between;
			}
			&.column1 {
				flex-direction: column;
			}
		}
	}
</style>

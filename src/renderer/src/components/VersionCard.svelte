<script lang="ts">
	import gameIcon from '../assets/test.png';
</script>

<div class="main">
    <div class="nmBox">
        <div class="theCard">
            <ul class="leftDetail">
                <li class="portraitBox">
                    <img src="{gameIcon}" alt="游戏图标" class="portrait">
                </li>
                <li class="introduce">
                    <p class="name">
                        1.19.2
                    </p>
                    <p class="logonStatus">
                        香草版本
                    </p>
                </li>
            </ul>
            <ul class="rightDetail">
                <li>上一次播放时间</li>
                <li class="detail">{new Date().toLocaleDateString()}</li>
                <br>
                <li>总和播放时间</li>
                <li class="detail">{"114514秒"}</li>
            </ul>
            <span class="toggleIcon iconfont">&#xe656;</span>
        </div>
    </div>
</div>

<style lang="postcss">
    .nmBox {
        margin-top: 6px;
        height: 125px;
        justify-content: flex-start;
        align-items: flex-start;

        & .portraitBox {
            height: 70px;

            & .portrait {
                border-radius: 3px;
            }
        }

        & .introduce {
            margin-left: 12px;

            & .name {

            }

            & .logonStatus {

            }
        }

        & .theCard {
            display: grid;
            grid-template: "left right";
            grid-template-columns: 70px 1fr;
            width: 100%;
            height: 100%;
            & .detail {
                font-size: 12px;
                color: #fff3;
                font-family: SourceHan_Sans;
                font-weight: bold;
            }
            & .leftDetail {
                grid-area: left;
            }

            & .rightDetail {
                padding-top: 16px;
                padding-left: 28px;
                font-family: "HarmoyOS_Sans";
                font-weight: 2;
                font-size: 16px;
                letter-spacing: 3px;
                grid-area: right;
                color: #fff9;
                & .detail{
                    margin-top: 6px;
                    font-family: HarmoyOS_Sans;
                    font-weight: 3;
                }
            }
        }
    }
</style>
<script lang="ts">
	import gameIcon from '../assets/test.png';

	let isOpen: boolean = false;
</script>

<div class="main">
    <div class="nmBox" class:open={isOpen}>
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
            <span class="toggleIcon iconfont" on:click={()=>isOpen = !isOpen}>&#xe656;</span>
        </div>
        <div class="list">
            <ul class="inn-ul">
                <li class="selected">1.19.2</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
                <li>随便写点什么</li>
            </ul>
        </div>
    </div>
</div>

<style lang="postcss">
    .nmBox {
        margin-top: 6px;
        height: 125px;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        transition: height 250ms;

        &.open {
            height: calc(100vh - 128px);
        }

        & .list {
            width: 100%;
            height: calc(100% - 125px);
            position: absolute;
            top: 125px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;

            & .inn-ul {
                border-top: 2px solid #fff3;
                margin-top: 6px;
                padding-top: 6px;
                width: calc(100% - 30px);
                height: calc(100% - 30px);
                overflow: auto;

                & li {
                    font-family: HarmoyOS_Sans;
                    font-weight: 1;
                    color: #fff9;
                    margin-bottom: 3px;
                    margin-right: 3px;
                    border-radius: 3px;
                    overflow: hidden;
                    padding: 3px;
                    transition: background-color 250ms, color 250ms, padding-left 250ms, font-size 250ms;
                    position: relative;

                    &.selected {
                        font-weight: 3;
                        &:hover {
                            font-weight: 3;
                        }
                        &:before{
                            content: "\e7fb";
                        }
                    }

                    &:before {
                        content: "\e7fa";
                        font-family: iconfont;
                        margin-right: 3px;
                    }

                    &:after {
                        transition: color 100ms, background-color 100ms;
                        border-radius: 2px;
                        padding: 0 3px;
                        position: absolute;
                        right: 6px;
                        content: "\e747";
                        font-family: iconfont;
                        color: transparent;
                    }

                    &:hover {
                        background-color: #fff2;
                        font-weight: 2;
                        color: #fffc;
                        padding-left: 8px;

                        &:after {
                            transition: color 250ms, background-color 250ms;
                            color: #fffc;
                            background-color: #fff2;
                        }
                    }
                }

                &::-webkit-scrollbar-button {
                    width: 0;
                    height: 12px;
                }
            }
        }

        & .theCard {
            position: absolute;
            display: grid;
            grid-template: "left right";
            grid-template-columns: 70px 1fr;
            width: 100%;
            height: 100%;
            overflow: hidden;

            & .detail {
                font-size: 12px;
                color: #fff3;
                font-family: SourceHan_Sans;
                font-weight: bold;
            }

            & .leftDetail {
                grid-area: left;

                & .portraitBox {
                    height: 70px;

                    & .portrait {
                        border-radius: 3px;
                    }
                }

                & .introduce {
                    margin-left: 12px;
                }
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

                & .detail {
                    margin-top: 6px;
                    font-family: HarmoyOS_Sans;
                    font-weight: 3;
                }
            }
        }
    }
</style>
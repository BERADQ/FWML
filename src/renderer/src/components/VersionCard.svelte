<script lang="ts">
	import gameIcon from '../assets/test.png';
</script>

<div class="main">
    <div class="nmBox">
        <div class="portraitBox">
            <img src="{gameIcon}" alt="游戏图标" class="portrait">
        </div>
        <div class="introduce">
            <p class="name">
                1.19.2
            </p>
            <p class="logonStatus">
                香草版本
            </p>
        </div>
        <span class="toggleIcon iconfont">&#xe656;</span>
    </div>
</div>

<style lang="postcss">
    .nmBox {
        margin-top: 6px;
        & .portraitBox{
            & .portrait{
                border-radius: 3px;
            }
        }
    }
</style>
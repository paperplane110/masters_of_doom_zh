<template>
    <div class="flex justify-center">
        <div class="max-w-[480px] font-think text-lg text-indigo-800 border dark:border-gray-600 px-[5rem] sm:px-[5rem] my-4  bg-[#f6fbb7] relative">
            
            <!-- red vertical line -->
            <div class="absolute h-full w-1 border-x border-l-red-200 border-r-red-200 transform -translate-x-[100%]"></div>

            <!-- blue underlines -->
            <div 
                v-for="idx of 17" 
                class="absolute left-0 w-full border-t border-indigo-300/50 text-lg"
                :style="{'top': `${idx * 1.75 - 0.5}rem`}"
                :key="idx"
            />

            <p>
                尊敬的 John，<br/>
                <br/>
                &emsp;我非常喜欢你的游戏《埃及金字塔》，与前几期《大蓝盘》软盘杂志上的迷宫游戏相比，你的游戏更出色。<br/>
                &emsp;我一口气玩到昨晚两点，终于把游戏打穿了，太好玩了！
                这个游戏你最高能打多少分？有没有跳关的作弊码？你还知道有哪些类似的游戏吗？
                打电话跟我讲讲你的收藏吧……或者写信也行。<br/>
                <br/>
                &emsp;万分感谢，<br/>
                &emsp;Scott Mulliere<br/>
                <br/>
                PS：我觉得我找到了一个小 Bug（未知的游戏机制？）！
            </p>
        </div>
    </div>
</template>

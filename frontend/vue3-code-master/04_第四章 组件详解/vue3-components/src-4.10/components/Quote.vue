<template>
  <!-- 4.10.1 -->
  <!-- <slot></slot> -->
  <!-- <slot name="default"></slot> -->
  
  <!-- 4.10.2 -->
  <!-- content内容放置到了title的前面 -->
  <!-- <slot name="content"></slot>
  <slot name="title"></slot> -->

  <!-- 4.10.3 -->
  <!-- <slot name="content"></slot>
  <slot name="title"></slot> -->
  <!-- 其实slot有一个默认的name值为default -->
  <!-- <slot></slot> -->

  <!-- 4.10.4  -->
  <slot name="content"></slot>
  <slot name="title"></slot>
  <!-- 如果父组件没有进行v-slot:subTitle副标题的内容传递，则会直接显示插槽默认值"副标题" -->
  <slot name="subTitle"><p>副标题</p></slot>
  <!-- 其实slot有一个默认的name值为default -->
  <slot></slot>
</template>

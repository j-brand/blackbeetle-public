<template>
  <label :for="fieldId" class="checkbox-wrapper ">
    <slot></slot>
    <!--    <input :id="fieldId" type="checkbox" :checked="checked" @input="(event) => $emit('update:checked', event.target.checked)" />
 -->
    <input :id="fieldId" type="checkbox" :checked="checked" @input="(event) => onChange(event)" />

    <span class="checkmark"></span>
    <span class="text-bb-red text-sm" v-if="message"><br />{{ message }}</span>
  </label>
</template>

<script lang="ts">
export default {
  name: "BaseCheckbox",
  props: {
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    message: {
      type: String,
      requierd: false,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    function onChange(event) {
      if (props.multiple) {
        emit("checked", { id: props.fieldId, value: event.target.checked });
      } else {
        emit("update:checked", event.target.checked);
      }
    }
    return { onChange };
  },
};
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: theme("colors.bb-charcole");
      border: 1px solid theme("colors.bb-lighter");
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    background-color: theme("colors.bb-lighter");
    border: 1px solid theme("colors.bb-charcole");

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 6px;
      top: 3px;
      width: 6px;
      height: 10px;
      border: solid theme("colors.bb-lighter");
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
}
</style>

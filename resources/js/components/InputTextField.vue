<template>
    <div class="border-b border-b-2 pt-16 relative" :class="classes">
        <label :for="name" class="text-blue-400 font-bold absolute top-1/3">{{ label }}</label>
        <input type="text" :name="name" :id="name" :placeholder="placeholder"
               class="py-2 focus:outline-none w-full"
               @input="updateField(); errors.clearError(name)"
               v-model="value">

        <span class="text-red-600 text-sm" v-if="errors.hasError(name)">
            {{ errors.getError(name) }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "InputTextField",
        props: ['name', 'placeholder', 'defaultValue', 'dataValue', 'errors', 'label', 'classes'],
        data() {
            return {
                value: this.defaultValue
            }
        },
        methods: {
            updateField() {
                this.$emit('update:field', this.value);
            }
        },
        watch: {
            dataValue: function(val) {
                this.value = val;
            }
        }
    }
</script>

<style scoped>

</style>

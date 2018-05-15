<template>
    <v-app>
        <h1 class="text-xs-center">
            {{title}}
        </h1>
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                title: 'Welcome to Vueline!',
            };
        },
    };
</script>

<template>
    <v-app id="app" light>
        <v-navigation-drawer app
                             :mini-variant.sync="mini"
                             permanent
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>ADMIN</v-list-item-title>

                <v-btn
                        icon
                        @click.stop="mini = !mini"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        :to="item.link"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-content>
            <v-container fluid>
                <v-row style="height: 100%"
                        align="center"
                        justify="center"
                >
                    <v-col class="text-center fill-height">
                        <router-view ></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    // import RealGrid from "@/components/RealGrid";

    export default {
        props: {
            source: String,
        },
        // components: {RealGrid},
        data() {
            return {
                drawer: true,
                items: [
                    {title: '메뉴 관리', icon: 'mdi-home-city', link: '/realgridTest'},
                    {title: '사용자 관리', icon: 'mdi-account', link: '/testView'},
                    {title: '세부권한 관리', icon: 'mdi-account-group-outline'},
                ],
                mini: true,
            }
        },
    }
</script>

<style>
    html, body {
        overflow: hidden !important;
        height: 100%;
    }


</style>
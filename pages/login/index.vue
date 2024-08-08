<script setup lang="ts">
import type { AtpSessionData } from "@atproto/api";

definePageMeta({
  layout: "login-layout",
});

const username = ref<string>("");
const password = ref<string>("");
const isError = ref<boolean>(false);
const errorText = ref<string>("不明なエラーが発生しました");

const clickLoginHandler = async () => {
  isError.value = false;

  if (username.value === "" || password.value === "") {
    isError.value = true;
    errorText.value = "ユーザーネームまたはパスワードを入力してください";
    return;
  }

  const response = await $fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.data);

  if (response.status === 200 && response.data) {
    isError.value = false;

    if (await addUser(response.data)) {
      navigateTo("/");
    } else {
      isError.value = true;
      errorText.value = "サーバー側のエラーです";
    }
  } else {
    isError.value = true;
    errorText.value = "ユーザーネームまたはパスワードが間違っています";
  }
};
</script>

<template>
  <NuxtLayout>
    <div class="login__container">
      <div class="login__card">
        <div>Bloogle</div>

        <div class="login__cardBody">
          <div class="login__title">
            <!-- <img src="/images/logo.svg" alt="logo" /> -->
            <h2>ログイン</h2>
            <p>お客様のBlueskyアカウントを使用</p>
          </div>

          <div class="login__form">
            <p class="login__error" v-if="isError">
              {{ errorText }}
            </p>
            <div class="login__formItem">
              <input
                type="text"
                class="login__input"
                aria-label="ユーザーネーム"
                placeholder="  "
                v-model="username"
              />
              <div class="login__inputLabel">ユーザーネーム</div>
            </div>

            <div class="login__formItem">
              <input
                type="password"
                class="login__input"
                aria-label="Appパスワード"
                placeholder="  "
                v-model="password"
              />
              <div class="login__inputLabel">Appパスワード</div>
            </div>

            <div class="login__loginButton">
              <Button
                bgcolor="var(--color-blue)"
                color="var(--color-white)"
                width="80px"
                @click="clickLoginHandler"
                >ログイン</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-annual-blue);
}

.login__card {
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 28px;
  background-color: var(--color-white);
}

.login__cardBody {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  box-sizing: border-box;

  gap: 24px;
}

.login__title {
  display: flex;
  flex-basis: 50%;
  flex-direction: column;

  gap: 8px;

  h2 {
    margin: 0;
  }
}

.login__form {
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: flex-end;

  gap: 24px;
}

.login__formItem {
  position: relative;
  width: 100%;
}

.login__input {
  z-index: 1;
  width: 100%;
  margin: 1px 1px 0 1px;
  padding: 16px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  box-sizing: border-box;
  color: #1f1f1f;

  &:focus + .login__inputLabel,
  &:not(:placeholder-shown) + .login__inputLabel {
    top: calc(50% - 24px);
    font-size: 0.8rem;
  }
}

.login__inputLabel {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  background-color: var(--color-white);
  color: var(--color-gray-black);
  transition: all 0.2s ease;

  pointer-events: none;
}
</style>

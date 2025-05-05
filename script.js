"use strict";

const overlay = document.querySelector(".overlay");
const btnsShowModal = document.querySelectorAll(".show-modal");
const modals = document.querySelectorAll(".modal");
let currentModal = null; // 追蹤當前開啟的 modal

// 開啟 modal 的函數
const openModal = function (modal) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  currentModal = modal;
};

// 關閉 modal 的函數
const closeModal = function () {
  modals.forEach((modal) => {
    modal.classList.add("hidden");
  });
  overlay.classList.add("hidden");
  currentModal = null;
};

// 為每個按鈕綁定開啟對應的 modal
btnsShowModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    const modalId = btn.getAttribute("data-modal");
    const modalToOpen = document.getElementById(modalId);
    openModal(modalToOpen);
  });
});

// 為所有關閉按鈕綁定事件
modals.forEach((modal) => {
  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", closeModal);
});

// 點擊 overlay 關閉 modal
overlay.addEventListener("click", closeModal);

// 按 Escape 鍵關閉 modal
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    currentModal &&
    !currentModal.classList.contains("hidden")
  ) {
    closeModal();
  }
});

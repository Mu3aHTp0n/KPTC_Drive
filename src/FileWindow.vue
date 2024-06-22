<script setup>

</script>

<template>
    <div class="full">
        <div class="file-manager">
            <h1>Управление файлами</h1>
            <input type="file" @change="onFileChange" />
            <ul class="file-list">
                <li v-for="(file, index) in files" :key="index" class="file-item">
                    {{ file.name }}
                    <button @click="deleteFile(index)" class="delete-button">Удалить</button>
                </li>
            </ul>
            <button type="button" class="backk" @click="back">Назад</button>
        </div>


        <div class="wrapper">
            <div class="buttons">
                <button id="download" @click="openFilePicker">Загрузить</button>
                <button id="delete" @click="deleteFiles">Удалить</button>
                <button id="rename" @click="openRenameModal">Переименовать</button>
                <button id="load" @click="downloadFiles">Скачать</button>
                <button id="save" @click="saveFiles">Сохранить</button>
            </div>
            <div>
                <input type="file" ref="fileInput" @change="onFileChange" style="display: none" multiple />
                <div v-for="(file, index) in selectedFiles" :key="index" class="back">
                    <input type="checkbox" v-model="file.checked" class="chekbox"/>
                    <p class="name-file">{{ file.name }}</p>
                </div>
            </div>
            <div v-if="showRenameModal" class="modal">
                <div class="modal-content">
                    <h2 class="modal-title">Введите новое имя файла</h2>
                    <input id="enter-text" type="text" v-model="newFileName" />
                    <div class="mod-text">
                        <button id="btnCancel" @click="cancelRename">Отменить</button>
                        <button id="btnSave" @click="saveRename">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            files: [],
            selectedFiles: [],
            showRenameModal: false,
            newFileName: ''
        };
    },
    methods: {
        back() {
            location.replace('authorization');
        },
        onFileChange(event) {
            const selectedFiles = event.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                this.files.push(selectedFiles[i]);
            }
        },
        deleteFile(index) {
            this.files.splice(index, 1);
        },
        openFilePicker() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const newFiles = Array.from(event.target.files).map(file => ({ name: file.name, checked: false }));
            this.selectedFiles = this.selectedFiles.concat(newFiles);
        },
        deleteFiles() {
            this.selectedFiles = this.selectedFiles.filter(file => !file.checked);
        },
        openRenameModal() {
            const selectedFile = this.selectedFiles.find(file => file.checked);
            if (selectedFile) {
                this.newFileName = selectedFile.name;
                this.showRenameModal = true;
            }
        },
        cancelRename() {
            this.showRenameModal = false;
        },
        saveRename() {
            const selectedFileIndex = this.selectedFiles.findIndex(file => file.checked);
            if (selectedFileIndex !== -1) {
                this.selectedFiles[selectedFileIndex].name = this.newFileName;
                this.showRenameModal = false;
            }
        },
    }
};
</script>

<style scoped>
.file-manager {
    max-width: 600px;
    margin: 20px auto;
    padding: 16px;
    color: black;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ffffff;

}

h1 {
    text-align: center;
}

.file-list {
    padding: 0;
}

.file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f4f4f4;
    border-radius: 5px;
}

.delete-button {
    padding: 5px 10px;
    background-color: #ff6666;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>


<style>
ul {
    list-style-type: none;
}
</style>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}

.full {
    background-color: #515151;
    min-height: 100vh;
    padding-top: 20px;
}

.backk {
    padding: 8px 24px;
    background-color: #4c4c4c;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 24px;
    margin-left: 475px;
}

.backk:hover {
    transform: scale(1.03);
    background-color: #5c5c5c;
    transition: all 230ms ease-out;
}

/*  */

.wrapper {
    padding-left: 32px;
}
.buttons {
    margin-bottom: 16px;
}
.buttons > button {
    border: none;
    margin-right: 12px;
    padding: 8px 20px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}
.buttons > button:hover {
    transition: all 170ms ease-out;
    transform: translateY(-2px);
    background-color: #dadada;
}
.back {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    margin-bottom: 6px;
}
.modal {
    background-color: #42b983;
    max-width: 1140px;
    margin: 0 auto;
    padding: 48px;
    position: absolute;
    border-radius: 12px;
    left: 37vw;
    top: 37vh;
}
.modal-content {
    display: flex;
    flex-direction: column;
    color: #FFF;
}
.modal-title {
    margin-bottom: 32px;
    font-size: 32px;
}
.mod-text {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
.chekbox {
    width: 16px;
    margin-right: 8px;
}
.name-file {
}
#enter-text {
    outline: none;
    border: none;
    padding: 12px;
    border-radius: 8px;
}

#btnSave, #btnCancel {
    background-color: #ffffff;
    margin-top: 24px;
    border: none;
    border-radius: 4px;
    padding: 8px 24px;
    font-size: 20px;
    cursor: pointer;
}
#btnSave:hover, #btnCancel:hover {
    transform: translateY(-2px);
    background-color: #dddddd;
    transition: all 150ms ease-in;
}
</style>
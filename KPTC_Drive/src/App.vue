<template>
    <div class="buttons">
        <button id="download" @click="openFilePicker">Загрузить файл</button>
        <button id="delete" @click="deleteFiles">Удалить</button>
        <button id="rename" @click="openRenameModal">Переименовать</button>
        <button id="load" @click="downloadFiles">Скачать</button>
        <button id="save" @click="saveFiles">Сохранить</button>
    </div>

    <div>
        <input type="file" ref="fileInput" @change="onFileChange" style="display: none" multiple />
        <div v-for="(file, index) in selectedFiles" :key="index" class="back">
            <input type="checkbox" v-model="file.checked" />
            <p>{{ file.name }}</p>
        </div>
    </div>

    <div v-if="showRenameModal" class="modal">
        <div class="modal-content">
            <h2>Введите новое имя файла</h2>
            <input id="enter-text" type="text" v-model="newFileName" />
            <div class="mod-text">
                <button id="btnCancel" @click="cancelRename">Отменить</button>
                <button id="btnSave" @click="saveRename">Сохранить</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                selectedFiles: [],
                showRenameModal: false,
                newFileName: ''
            }
        },
        methods: {
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
            downloadFiles() {
                // Логика для скачивания файлов
            },
            saveFiles() {
                // Логика для сохранения файлов
            }
        }
    };
</script>

<style scoped>
    .back {
        display: flex;
        align-items: center;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        font-family: "DM Serif Display", serif;
    }

    .mod-text {
        padding-top: 20px;
    }

    #btnCancel {
        border-radius: 10px;
        font-family: "DM Serif Display", serif;
        padding: 10px;
        margin-right: 30px;
    }

    #btnSave {
        border-radius: 10px;
        font-family: "DM Serif Display", serif;
        padding: 10px;
    }

    #enter-text {
        margin: 5px;
        padding: 10px;
        border-top: 0px;
        border: 1px solid #000000;
    }

    #download, #load, #save, #rename, #delete {
        border-radius: 30px;
        border: 1px solid #000000;
        background-color: white;
        padding: 10px;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-right: 700px;
    }
</style>

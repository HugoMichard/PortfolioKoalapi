const viewedPageMarkdown = ref('')
const pathToFile = ref('')

const getPageMarkdown = async (path: string) => {
    const data = await fetch(path + '.md')
        .then(function (response) {
            return response.text()
        })
        .then(function (data) {
            return data // this will be a string
        })
    viewedPageMarkdown.value = data;
    pathToFile.value = path;
}

export default function () {
    return { getPageMarkdown, pathToFile, viewedPageMarkdown }
}

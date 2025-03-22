export async function obterReadme(repoUrl: string) {
    const repositorio = repoUrl.split("github.com/")[1]
    const readmeUrl = `https://raw.githubusercontent.com/${repositorio}/backup/README.md`
    const resposta = await fetch (readmeUrl)
    return resposta.text()
}
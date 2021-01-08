export function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => console.log('copied to clipboard.'))
}

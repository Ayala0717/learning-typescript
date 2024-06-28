async function fetchSomething(): Promise<string> {
  return fetch('lalala').then((data) => data.text())
}

function transformText(str: string | number) {
  if (typeof str === 'string') return str.toLowerCase()
}

transformText(9999)

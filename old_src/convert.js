// @flow
function convertHTML(str: string): string {
    let lookup = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "\'": '&apos;'
    };
    
    return str.replace(/\&|<|>|"|\'/g, match => lookup[match]);
}

export { convertHTML };
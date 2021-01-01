const showMesage = (message, holder, className) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = message;
    if(className && className.length > 0){
        h1.classList.add(className);
    }
    if(holder){
        holder.appendChild(h1);
    } else {
        throw new Error('Please Provide an Holder DOMElement.')
    }
    return h1;
}
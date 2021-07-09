// ==UserScript==
// @name         IMGUR Autofit Video to Window
// @namespace    Invertex
// @version      0.1
// @description  Make the directly viewed video content actually fit your screen... instead of often expanded way out of view.
// @author       Invertex
// @match        *://i.imgur.com/*
// @icon         https://www.google.com/s2/favicons?domain=imgur.com
// @grant        none
// @run-at       document-body
// ==/UserScript==

function setAutoSize(elem)
{
    elem.style.width = 'auto';
    elem.style.height = '100%';
}

(function()
{
    const content = document.body.querySelector('#content');
    const vid = content.querySelector('video');

    if(vid)
    {
        const container1 = content.querySelector('[class*=-container]');
        const post = container1.querySelector('[class^=post]');
        const container2 = post.querySelector('[class*=-container]');

        setAutoSize(content);
        setAutoSize(container1);
        setAutoSize(post);
        setAutoSize(container2);
        setAutoSize(vid);
    }
})();

import path from 'path';
import fs from 'fs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Application from '../client/components/Application';

const clientRenderer = (req, res) => {
    try {
		const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
		fs.readFile(filePath, 'utf8',  async (err, htmlData) => {
			if (err) {
				return res.status(502).end()
			}
			const context = {};
		
			const markup = renderToString(
               null
			);
			if (context.url) {
				// Somewhere a `<Redirect>` was rendered
				res.redirect(302, context.url)
			} else {
				// we're good, send the response
				const markupWithApp = `<div id="app">${markup}</div>`;
				const RenderedApp = htmlData.replace('<div id="app"></div>', markupWithApp);
				res.send(RenderedApp)
			}
		})
    }catch (e){
        console.log(e);
    }
}

export default clientRenderer;

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // const contentsPath = path.join(process.cwd(), '../blog/content');
    const contentsPath = "../blog/content"

    console.log(process.cwd())

    /*
    try {
        const directories = fs.readdirSync(contentsPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name.replace(/ /g, '_'));

        res.status(200).json({ directories });
    } catch (error) {
        console.error('Error reading directories:', error);
        res.status(500).json({ error: 'Failed to read directories' });
    }
    */
}

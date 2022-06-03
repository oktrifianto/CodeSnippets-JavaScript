/** ---------------
 * `path.resolve()`
 * ----------------
 * resolve a sequence of paths or path segments into an absolute path
 * 
 * @see
 * https://nodejs.org/api/path.html#pathresolvepaths
 * 
 * @syntax
 *    path.resolve([...paths])
 * 
 * @returns
 *    string
 */

 const path = require('path'); // module path

 console.log(__dirname);
 // returns: ...full_directory/views
 
 const path1 = path.resolve('/admin', 'users', 'readme.txt');
 console.log(path1); 
 // returns:  /admin/users/readme.txt
 
 const path2 = path.resolve('admin', 'users', 'readme.txt');
 console.log(path2); 
 // returns: ...full_directory/admin/users/readme.txt
 
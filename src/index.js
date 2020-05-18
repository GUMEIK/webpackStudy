// 希望导入的模块结果是一个可用的资源路径
import picture from './iamge/test.png'
const image = new Image();
image.src = picture;
document.body.appendChild(image);

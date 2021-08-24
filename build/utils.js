const path = require('path')

module.exports = {
  // 绝对路径（相对build文件夹）
  resolvePath: (dir = './') => {
    return path.resolve(__dirname, dir)
  },
  // static路径
  staticPath: (dir = './') => {
    return path.posix.join('static', dir)
  }
}

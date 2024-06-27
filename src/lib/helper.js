// export const getPictureRelativePath = (pic, fileType = 'png') => `/assets/${pic}.${fileType}`;
export const getPictureRelativePath = (pic, fileType = 'png') => {
    // 如果是打包后的环境，则使用相对路径
    if (process.env.NODE_ENV === 'production') {
        return `./${pic}.${fileType}`;
    }
    // 在开发环境中，仍然使用绝对路径
    return `/assets/${pic}.${fileType}`;
};
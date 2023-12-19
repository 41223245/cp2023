var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件 \n// https://blog.csdn.net/weixin_38468077/article/details/101069365 \n// http://www.gnuplot.info/demo/ \n// https://github.com/sysprog21/rv32emu \n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3 \n// https://cs61c.org/fa23/ \n// https://greenteapress.com/wp/think-python-2e/ \n// https://github.com/ecalvadi/c99-examples \n// https://github.com/gouravthakur39/beginners-C-program-examples \n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples \n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf \n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf \n// https://jsomers.github.io/cbook/cbook.pdf \n// https://jsomers.github.io/cbook/index.html \n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf \n// http://cslibrary.stanford.edu/101/EssentialC.pdf \n// https://publications.gbdirect.co.uk/c_book/ \n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf \n// ***** 在 replit 上執行 \n// CD 下載 \n// cc gnuplot_ex1.c -o gnuplot_ex1 \n// ./gnuplot_ex1 \n#include <stdio.h> \n \n// 主函式 \nint main() { \n    // 使用 popen 啟動 Gnuplot 進程 \n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w"); \n    如果（！gnuplotPipe）{ \n        fprintf(stderr, "無法啟動 Gnuplot。\\n"); \n        返回1； \n    } \n \n    // 使用Gnuplot繪圖指令，指定字型並輸出為PNG \n    fprintf(gnuplotPipe, "設定終端 png 字體 \'預設,10\' 大小 800,400\\n"); \n    fprintf(gnuplotPipe, "設定輸出 \'./../images/gnuplot_ex1.png\'\\n"); \n    fprintf(gnuplotPipe, "繪製 sin(x)"); \n    // 關閉popen \n    pclose(gnuplotPipe); \n \n    返回0； \n} \n 清除 \n 光碟下載 \n 抄送 gnuplot_ex1.c \n ./a.輸出 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n\nint main() {\n// 设置国旗的宽和高\nint width = 1200;\nint height = width / 2;\n\n// 创建图像\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\n// 绘制英国国旗\ndraw_uk_flag(img);\n\n// 将图像保存到文件\nFILE *outputFile = fopen("./../images/uk_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打开输出文件时发生错误。\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\n\n\nvoid draw_uk_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\n\nint red, white, blue;\nred = gdImageColorAllocate(img, 204, 0, 0); // 红色\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色\nblue = gdImageColorAllocate(img, 0, 0, 153); // 蓝色\n\ngdImageFilledRectangle(img, 0, 0, width, height, blue);\n\n\nint x1, y1, x2, y2, x3, y3;\n{\nint line_thickness = 100;\ngdImageSetThickness(img, line_thickness);\n\nint x1, y1, x2, y2, x3, y3;\n\n// 绘制白色斜线\nx1 = 0;\ny1 = 600;\nx2 = 1200;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, white);\n\nx1 = 0;\ny1 = 0;\nx2 = 1200;\ny2 = 600;\ngdImageLine(img, x1, y1, x2, y2, white);\n}\n{\nint line_thickness = 33;\ngdImageSetThickness(img, line_thickness);\n\n\n// 绘制红色斜线\nx1 = 566;\ny1 = 300;\nx2 = 1166;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 1233;\ny1 = 600;\nx2 = 633;\ny2 = 300;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 566;\ny1 = 300;\nx2 = -33;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 600;\ny1 = 316.5;\nx2 = 0;\ny2 = 616.5;\ngdImageLine(img, x1, y1, x2, y2, red);\n}\n{\nint line_thickness = 33;\ngdImageSetThickness(img, line_thickness);\n\nint x1, y1, x2, y2, x3, y3;\n\n// 绘制 斜线\nx1 = 0;\ny1 = 600;\nx2 = 1200;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red );\n\n\nx1 = 1200;\ny1 = 16.5;\nx2 = 600;\ny2 = 316.5;\ngdImageLine(img, x1, y1, x2, y2, white);\n\n\nx1 = 0;\ny1 = 583.5;\nx2 = 600;\ny2 = 283.5;\ngdImageLine(img, x1, y1, x2, y2, white);\n\n\n}\n\n// 绘制白色十字\nint cross_width = width / 32;\nint cross_arm_width = width / 32;\nint center_x = width / 2;\nint center_y = height / 2;\n\ngdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\ngdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n\n// 绘制红色十字\ngdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\ngdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\nint originalWidth = 1200;\nint originalHeight = (int)(originalWidth * 2.0 / 3.0);\ngdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\ngdImageAlphaBlending(img, 0);\n\ndraw_japan_flag(img);\n\n// 新的宽度和高度以适应 "images" 文件夹\nint newWidth = 600;\nint newHeight = (int)(newWidth * 2.0 / 3.0);\n\n// 创建新图像并进行缩放\ngdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\ngdImageAlphaBlending(resizedImage, 0);\ngdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\nFILE *outputFile = fopen("./../images/japan_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePng(resizedImage, outputFile);\nfclose(outputFile);\ngdImageDestroy(img);\ngdImageDestroy(resizedImage);\n\nreturn 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\n\n// 创建一个白色背景\nint white = gdImageColorAllocate(img, 255, 255, 255);\ngdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n// 绘制红色圆圈（太阳）\nint red = gdImageColorAllocate(img, 255, 0, 0);\nint center_x = width / 2;\nint center_y = height / 2;\nint radius = (int)((width * 2) / 3);\ndraw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n// 減小 size 的值,例如將他的值減半\nsize = size / 2;\ngdImageArc(img, x, y, size, size, 0, 360, color);\ngdImageFillToBorder(img, x, y, color, color);\n}\n\n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\nint width = 300; // 國旗寬度\nint height = 200; // 國旗高度\n\ngdImagePtr im = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(im, 0);\n\ndraw_chinese_flag(im);\n\nFILE *outputFile = fopen("./../images/proc_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打开输出文件时出错。\\n");\nreturn 1;\n}\n\ngdImagePngEx(im, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(im);\n\nreturn 0;\n}\n\n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nvoid draw_chinese_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, yellow;\n\n// 國旗顏色\nred = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\nyellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n// 畫紅色背景\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n\n// 設置星星的大小和位置\nint star_size = (int)(0.28 * height);\nint star_x = (int)(0.165 * width);\nint star_y = (int)(0.265 * height);\n\n// 畫大星星\ndraw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n// 繪製小星星，位置根據實際國旗比例計算\ndouble radius = 0.15 * height;\ndouble angle = 360 / 7 * M_PI / 179.0;\ndouble rotation = -M_PI / 7.5;\nint cx = (int)(0.32 * width);\nint cy = (int)(0.27 * height);\n\nfor (int i = -1; i < 3; i++) {\nint x = (int)(cx + radius * cos(i * angle + rotation));\nint y = (int)(cy + radius * sin(i * angle + rotation));\ndraw_star(img, x, y, 19, yellow, M_PI / 5.0);\n}\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\ngdPoint points[10];\n\n// 计算星形的五个外点和五个内点\ndouble outer_radius = size / 2;\ndouble inner_radius = size / 6;\ndouble angle = M_PI / 5.0;\n\nfor (int i = 0; i < 10; i++) {\ndouble radius = (i % 2 == 0) ? outer_radius : inner_radius;\ndouble theta = rotation_angle + i * angle;\npoints[i].x = x + radius * cos(theta);\npoints[i].y = y + radius * sin(theta);\n}\n\n// 使用 gdImageFilledPolygon 绘制星形\ngdImageFilledPolygon(img, points, 10, color);\n} \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w12', 'text': '  #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("hellogd.png", "wb");\n    if (outputFile == NULL) {\n\nfprintf(stderr, "Error opening the output file.\\n");\n\nreturn 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    // 長方形塗色\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n    // 橢圓形塗色\n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n    // 橢圓形畫線\n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n    // 畫直線\n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n\n    // 多邊形畫線\n    gdPoint points[4];\n    points[0].x = (int)width/4;\n    points[0].y = (int)height*3/4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n    gdImagePolygon(img, points, 4, black);\n\n    // 多邊形塗色\n    gdPoint points2[4];\n    points2[0].x = (int)width/3;\n    points2[0].y = (int)height/2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n} \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red );\n\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n\n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // Close the data file\n    fclose(outputFile);\n\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'Brython', 'text': '\n \n \n', 'tags': '', 'url': 'Brython.html'}]};
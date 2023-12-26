#include <stdio.h>

int main() {
    int x, y;
    int result1, result2; // 用于存储 scanf 的返回值

    // 获取第一个整数
    printf("Input the first integer: ");
    result1 = scanf("%d", &x);
    if (result1 != 1) {
        printf("Error: Please enter an integer.\n");
        return 1;
    }

    // 获取第二个整数
    printf("Input the second integer: ");
    result2 = scanf("%d", &y);
    if (result2 != 1) {
        printf("Error: Please enter an integer.\n");
        return 1;
    }

    // 计算并输出它们的和
    printf("Sum of the two integers = %d\n", x + y);

    return 0;
}
#include <stdio.h>

int main() {
    int a = 64;
    int b = 0x40;
    long c = 64L;

    printf("%d,%d,%ld", a, b, c);  // 使用 %ld 來打印 long 整數型別的變數 c

    return 0;
}
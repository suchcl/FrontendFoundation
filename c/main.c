#include <stdio.h>

int main()
{
    int x = 5;
    if (x-- < 5)
    {
        printf("%d\n", x);
    }
    else
    {
        printf("%d\n", x++);
    }
    printf("%d\n", x++);
}
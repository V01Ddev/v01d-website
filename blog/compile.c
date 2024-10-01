#include <stdio.h>
#include <stdlib.h>


int main() {
    printf("[*] Compiling post.md to post.html using pandoc and template\n");

    system("pandoc --stanalone --katex post.md -o post.html");

    return 0;
}

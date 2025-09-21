# def intro():
#     print("Hello, welcome to the Python programming world!")
#     print("Let's explore some basic concepts together.")
#     print("Feel free to ask questions as we go along.")
#     print("Happy coding!")
#     return 'Introduction complete.'


# b = intro()
# print(b)

# def magic(rafay, dawood, ahad, saad):
#     result = rafay + dawood + ahad + saad
#     return result


# res = magic(85, 75, 65, 76)
# print(res)


# res2 = magic(95, 85, 55, 66)
# print(res2)

# def printdecreasing(n):
#     if n < 1:
#         return
#     print(n)
#     printdecreasing(n - 1)

# printdecreasing(9)


def printincreasing(n):
    if n > 100:
        return
    print(n)
    printincreasing(n + 1)

printincreasing(1)
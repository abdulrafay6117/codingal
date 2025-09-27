import turtle

sc = turtle.Screen()

sc.bgcolor("lightblue")
sc.setup(width=800, height=600)

sc.title("Turtle Graphics Example")

t = turtle.Turtle()

for i in range(36):
    t.forward(200)
    t.right(170)


turtle.done()
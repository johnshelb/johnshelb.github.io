import tkinter
import time


# width of the animation window
animation_window_width=800
# height of the animation window
animation_window_height=800
# radius of the ball
animation_ball_radius = 30
# initial x position of the ball
animation_ball_start_xpos = animation_window_width/2
# initial y position of the ball
animation_ball_start_ypos = animation_window_height/2
# the pixel movement of ball for each iteration
ball_change = animation_window_width/24
# delay between successive frames in seconds
animation_refresh_seconds = 1

# The main window of the animation
def create_animation_window():
    window = tkinter.Tk()
    window.title("4-7-8 Breath Coach")
    # Uses python 3.6+ string interpolation
    #  window.geometry(f'{animation_window_width}x{animation_window_height} + 250 + 25')#what is window.geometry?, 1st term is size of window, second is offset of x and y positions
    window.geometry(f'{animation_window_width}x{animation_window_height}+350+200')#what is window.geometry?, 1st term is size of window, second is offset of x and y positions
    return window

# Create a canvas for animation and add it to main window
def create_animation_canvas(window):
    canvas = tkinter.Canvas(window)
    canvas.configure(bg="black")
    canvas.pack(fill="both", expand=True)
    return canvas

# Create and animate ball in an infinite loop
def animate_ball(window, canvas):
    message = canvas.create_text(animation_window_width/2,animation_window_height/2,fill="red",text="BREATHE WITH ME: \n             4 - 7 - 8", font=("",75))
    window.update()
    time.sleep(3)
    breath_count = 0
    while True:
        breath_count+=1
        count = 0
        canvas.delete("all")
        ball = canvas.create_oval(animation_ball_start_xpos-animation_ball_radius,animation_ball_start_ypos-animation_ball_radius,animation_ball_start_xpos+animation_ball_radius,animation_ball_start_ypos+animation_ball_radius)

        breath_count_display = canvas.create_text(animation_window_width/1.3,animation_window_height/1.03,fill="red",text=f"Breath Counter: {breath_count}", font=("courier",25))


        while count<=4:
            x1,y1,x2,y2 = canvas.coords(ball)
            canvas.delete("all")
            ticker = canvas.create_text(animation_window_width/5,75,fill="red",text=f'{str(count)}',font=("",50))
            ball = canvas.create_oval(x1-ball_change * 2, y1-ball_change*2,x2+ball_change*2,y2+ball_change*2, fill="blue", outline="white",width=4)
            message = canvas.create_text(animation_window_width/2,animation_window_height/2,fill="red",text="inhale", font=("courier",35))


            breath_count_display = canvas.create_text(animation_window_width/1.3,animation_window_height/1.03,fill="red",text=f"Breath Counter: {breath_count}", font=("courier",25))




            window.update()
            time.sleep(animation_refresh_seconds)
            count+=1


        count = 7
        while count > 0:
            canvas.delete("all")
            ball = canvas.create_oval(x1-ball_change * 2, y1-ball_change*2,x2+ball_change*2,y2+ball_change*2, fill="black",
            outline="white",width=4)
            ticker = canvas.create_text(animation_window_width/5,75,fill="red",text=f'{str(count)}',font=("",50))
            message = canvas.create_text(animation_window_width/2,animation_window_height/2,fill="red",text="pause",font=("",100))
            breath_count_display = canvas.create_text(animation_window_width/1.3,animation_window_height/1.03,fill="red",text=f"Breath Counter: {breath_count}", font=("courier",25))

            window.update()
            count-=1
            time.sleep(animation_refresh_seconds)

        count = 8
        while count > 0:
            x1,y1,x2,y2 = canvas.coords(ball)
            canvas.delete("all")
            ball = canvas.create_oval(x1+ball_change, y1+ball_change,x2-ball_change,y2-ball_change, fill="green", outline="white",width=4)
            ticker = canvas.create_text(animation_window_width/5,75,fill="red",text=f'{str(count)}',font=("",50))
            message = canvas.create_text(animation_window_width/2,animation_window_height/2,fill="red",text="exhale",font=("courier",35))
            breath_count_display = canvas.create_text(animation_window_width/1.3,animation_window_height/1.03,fill="red",text=f"Breath Counter: {breath_count}", font=("courier",25))
            window.update()
            time.sleep(animation_refresh_seconds)
            count-=1



# The actual execution starts here
animation_window = create_animation_window()
animation_canvas = create_animation_canvas(animation_window)
animate_ball(animation_window,animation_canvas)

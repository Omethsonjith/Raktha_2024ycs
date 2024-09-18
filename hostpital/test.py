import tkinter
from tkinter import ttk
from tkinter import messagebox


def center_window(width, height):
    x = (root.winfo_screenwidth() // 2) - (width // 2)
    y = (root.winfo_screenheight() // 2) - (height // 2)
    root.geometry(f'{width}x{height}+{x}+{y}')


class WelcomeWindow(tkinter.Frame):
    def __init__(self, master):
        super().__init__()
        self.master = master
        self.master.title("Welcome")
        
        # Saving User Info
        user_info_frame =tkinter.LabelFrame(self,text="Pation details")
        user_info_frame.grid(row= 0, column=0, padx=20, pady=10)

        self.first_name_label = tkinter.Label(user_info_frame, text="First Name")
        self.first_name_label.grid(row=0, column=0)
        self.last_name_label = tkinter.Label(user_info_frame, text="Last Name")
        self.last_name_label.grid(row=0, column=1)

        self.first_name_entry = tkinter.Entry(user_info_frame)
        self.last_name_entry = tkinter.Entry(user_info_frame)
        self.first_name_entry.grid(row=1, column=0)
        self.last_name_entry.grid(row=1, column=1)

        self.nic_label = tkinter.Label(user_info_frame, text="NIC")
        self.nic_entry =  tkinter.Entry(user_info_frame)
        self.nic_label.grid(row=0, column=2)
        self.nic_entry.grid(row=1, column=2)


        self.age_label = tkinter.Label(user_info_frame, text="Age")
        self.age_spinbox = tkinter.Spinbox(user_info_frame, from_=18, to=110)
        self.age_label.grid(row=2, column=0)
        self.age_spinbox.grid(row=3, column=0)

        self.gendar_label = tkinter.Label(user_info_frame, text="Gendar")
        self.gendar_combobox = ttk.Combobox(user_info_frame, values=["Male", "Female"])
        self.gendar_label.grid(row=2, column=1)
        self.gendar_combobox.grid(row=3, column=1)


        self.type_label = tkinter.Label(user_info_frame, text="Blood type")
        self.type_combobox = ttk.Combobox(user_info_frame, values=["", "A+", "A-.", "B+","B-","AB+","AB-","O+","O-"])
        self.type_label.grid(row=2, column=2)
        self.type_combobox.grid(row=3, column=2)


        for widget in user_info_frame.winfo_children():
            widget.grid_configure(padx=10, pady=5)

        # Saving Course Info
        courses_frame = tkinter.LabelFrame(self)
        courses_frame.grid(row=1, column=0, sticky="news", padx=20, pady=10)



        self.level_label = tkinter.Label(courses_frame, text="Emergency level")
        self.level_combobox = ttk.Combobox(courses_frame, values=["", "Red", "Yellow","green"])
        self.level_label.grid(row=0, column=2)
        self.level_combobox.grid(row=1, column=2)



        for widget in courses_frame.winfo_children():
            widget.grid_configure(padx=10, pady=5)

        # Accept terms
        terms_frame = tkinter.LabelFrame(self, text="Terms & Conditions")
        terms_frame.grid(row=2, column=0, sticky="news", padx=20, pady=10)

        self.accept_var = tkinter.StringVar(value="Not Accepted")
        terms_check = tkinter.Checkbutton(terms_frame, text= "I accept the terms and conditions.",
                                        variable=self.accept_var, onvalue="Accepted", offvalue="Not Accepted")
        terms_check.grid(row=0, column=0)

        # Button
        button = tkinter.Button(self, text="Enter data",command= self.data)
        button.grid(row=3, column=0, sticky="news", padx=20, pady=10)
        self.pack()   
    def data(self):     
        accepted = self.accept_var.get()
        if accepted=="Accepted":
            # User info
            firstname = self.first_name_entry.get()
            lastname = self.last_name_entry.get()
            nic =self.nic_entry.get()
            age = self.age_spinbox.get()
            gendar = self.gendar_combobox.get()
            btype =self.type_combobox.get()
            level=self.level_combobox.get()
            
            if firstname and lastname and nic and nic and age and gendar and btype and level:
                print(firstname)
                print(lastname)
                print(nic)
                print(age)
                print(gendar)
                print(btype)
                print(level)
                for widget in self.winfo_children():
                    widget.destroy()
                self.destroy()
                Find(self.master)


            else:
                tkinter.messagebox.showwarning(title="Error", message="Some data required")
        else:
            tkinter.messagebox.showwarning(title= "Error", message="You have not accepted the terms")
            



class Find(tkinter.Frame):
    def __init__(self, master):
        super().__init__()
        self.master = master
        self.master.title("Login")
        self = tkinter.Label(root, text="Please wait we will find best donor!(##### this is a demo###, can'send message)")

        self.pack()
       
        




root = tkinter.Tk()
root.eval('tk::PlaceWindow . center')
WelcomeWindow(root)
root.mainloop()
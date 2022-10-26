# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) line one indicates blogpost being child class to application controller and also has a def method called index. This stores and organizes all the values created and decalared
class BlogPostsController < ApplicationController
  def index
    # ---2) this allows access to all index values made within the table of blog post. @posts links controller to the index if I remember correctly
    @posts = BlogPost.all
  end

  # ---3) def show has a self declaring name, it's the title to a method that will allow people to view the index values.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) def new is a method name with title's a method that will probably be used for making new entries based off that single line
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) the line directly below allows for the creation of a new instance for the table and also link the controller to the value/table to do the function
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) this line of code finds the id of a column and allows a developer to
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this line updates the paramters of blog posts, meaning the list of blog posts stored
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) after deleting it will return back to the list of blog posts
      redirect_to blog_posts_path
    end
  end

  # ---9) private ensures code within cant be called outside it
  private
  def blog_post_params
    # ---10) parameter needs to be title and/ or content or it wont be accepted
    params.require(:blog_post).permit(:title, :content)
  end
end

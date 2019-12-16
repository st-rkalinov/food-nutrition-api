@extends('layouts.app')

@section('content')
    <div class="bg-gray-100 h-full xl:p-16 lg:p-5 md:p-5 sm:p-0 p-0 flex justify-center items-center">
        <div class="lg:w-4/5 md:w-full sm:w-full w-full h-full p-10 relative bg-white form-wrapper z-0 rounded">
            <div class="h-full absolute top-0 bottom-0 -z-1 left-0 right-0"></div>
            <div class="z-10 sm:w-full md:w-1/2 pt-32">
                <h1 class="text-3xl text-black font-bold pb-4">Welcome back</h1>

                <p>Don't have an account ? <a href="{{ route('register') }}" class="text-blue-300 font-bold text-sm">Create one here</a></p>

                <form method="POST" action="{{ route('login') }}" class="pt-10" >
                    @csrf
                    <div class="relative pt-5">
                        <label for="email" class="absolute top-0 text-xs text-blue-300 font-bold">Email Address</label>
                        <div class="">
                            <input id="email" type="email"
                                   class="focus:outline-none border-b-2 focus:bg-gray-200 hover:shadow-xl p-3 w-full rounded @error('email') is-invalid @enderror"
                                   placeholder="example@email.com"
                                   name="email" value="{{ old('email') }}"
                                   required autocomplete="email">
                            @error('email')
                                <span class="text-sm text-red-400 p-3" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                     <div class="relative pt-5 mt-5">
                        <label for="password" class="absolute top-0 text-xs text-blue-300 font-bold">Password</label>
                        <div>
                            <input id="password" type="password"
                                   class="focus:outline-none border-b-2 focus:bg-gray-200 hover:shadow-2xl p-3 w-full rounded @error('password') is-invalid @enderror"
                                   placeholder="************"
                                   name="password"
                                   autocomplete="current-password"
                                   required>
                            @error('password')
                                <span class="text-sm text-red-400 p-3" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="flex justify-between items-center pt-10">
                        <div>
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                            <label class="form-check-label" for="remember">
                                Remember Me
                            </label>
                        </div>
                        <div>
                            <a href="{{ route('password.request') }}">Forgot Password ?</a>
                        </div>
                    </div>

                    <div class="pt-16 text-center">
                        <button type="submit" class="w-1/2 bg-gray-400 hover:bg-white hover:border hover:border-blue-800 py-2 px-3 text-left uppercase rounded text-blue-800 font-bold text-center">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class demo_线程池{
    public static void main(String[] args) {
        ThreadPoolExecutor ex=new ThreadPoolExecutor(
            2,
            4,
            60,
            TimeUnit.SECONDS,
            new LinkedBlockingDeque<>(2),
            Executors.defaultThreadFactory(),
            new ThreadPoolExecutor.DiscardOldestPolicy(
)
    }
}
import java.util.concurrent.*;

/**
 * 演示如何使用 ThreadPoolExecutor 创建和管理线程池。
 * 
 * 线程池常见参数说明：
 * corePoolSize（核心线程数）：线程池中始终保持的线程数量，即使它们处于空闲状态。
 * maximumPoolSize（最大线程数）：线程池允许创建的最大线程数量。
 * keepAliveTime（线程空闲存活时间）：当线程数大于核心线程数时，多余的空闲线程的最大存活时间。
 * unit（时间单位）：keepAliveTime 的时间单位。
 * workQueue（任务队列）：用于保存等待执行任务的队列。
 * threadFactory（线程工厂）：用于创建新线程的工厂。
 * handler（拒绝策略）：当任务无法被执行时的处理策略。
 */
public class demo_线程池_copy{
    public static void main(String[] args) {
        // 创建线程池，参数含义如下：
        // corePoolSize = 2：核心线程数为2，线程池会优先使用这2个线程处理任务
        // maximumPoolSize = 4：最大线程数为4，任务多时最多可扩展到4个线程
        // keepAliveTime = 60，unit = TimeUnit.SECONDS：非核心线程空闲60秒后会被回收
        // workQueue = new LinkedBlockingQueue<>(2)：任务队列容量为2，超过2个任务时会尝试扩展线程数
        // threadFactory = Executors.defaultThreadFactory()：使用默认线程工厂创建线程
        // handler = new ThreadPoolExecutor.AbortPolicy()：当任务无法执行时抛出异常
        ThreadPoolExecutor executor = new ThreadPoolExecutor(
                2, // 核心线程数
                4, // 最大线程数
                60, // 非核心线程空闲存活时间
                TimeUnit.SECONDS, // 时间单位
                new LinkedBlockingQueue<>(2), // 任务队列
                Executors.defaultThreadFactory(), // 线程工厂
                new ThreadPoolExecutor.AbortPolicy() // 拒绝策略
        );

        // 提交6个任务到线程池
        // 前2个任务由核心线程直接执行
        // 第3、4个任务进入队列等待
        // 第5、6个任务由于队列已满，线程池会扩展到最大线程数执行
        // 如果再提交任务，则会触发拒绝策略（抛出异常）
        for (int i = 1; i <= 6; i++) {
            final int taskId = i;
            executor.execute(() -> {
                System.out.println("执行任务 " + taskId + "，线程：" + Thread.currentThread().getName());
                try {
                    Thread.sleep(1000); // 模拟任务耗时1秒
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        // 关闭线程池，等待已提交任务执行完毕后关闭
        executor.shutdown();
    }
}